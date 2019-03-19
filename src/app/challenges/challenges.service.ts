import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, of, Subscription } from "rxjs";
import { take, tap, switchMap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { Challenge } from './challenge.model';
import { DayStatus, Day } from './day.model';
import { AuthService } from "../auth/auth.service";

/**
 * If you want to provide the service only to the challenges module, you add this to
 * the providers of the challenges module. In our case here we want the service to be
 * provided to the root element because we want the service to be a singleton. It has
 * to be accessible evrywhere as one single instance
 */

const FIREBASE_URL = 'https://ns-my-challenges.firebaseio.com/';

@Injectable({ providedIn: 'root' })
export class ChallengesService implements OnDestroy {

    /**
     * The BehaviorSubject is like an event emitter but when you subscribe to it,
     * it gives you the lastest value
     */
    private _currentChallenge = new BehaviorSubject<Challenge>(null);
    private _rootUrl: string;
    private userSub: Subscription;

    constructor(
        private http: HttpClient,
        private authService: AuthService
    ) {
        /**
         * We subscribe here to the currentUser and check when this user is set to null
         * to set the current challenge to null! Why not call the cleanup method on logout?
         * Because we have a circular reference error when the challenge service is injected
         * inside the auth service
         */
        this.userSub = this.authService.user.subscribe(user => {
            if (!user) {
                this.cleanUp();
            }
        });
    }

    get currentChallenge() {
        return this._currentChallenge.asObservable();
    }

    fetchCurrentChallenge() {
        /**
         * We don't subscribe to the user because the subscription closes
         * the observable, instead we turn it into a new observable, where I
         * can use the value of this first observable in the second one. We do
         * this with switchMap
         */
        return this.authService.user.pipe(
            take(1),
            switchMap(currentUser => {
                if (!currentUser || !currentUser.isAuth) {
                    return of(null);
                }
                return this.http.get<{
                  title: string;
                  description: string;
                  month: number;
                  year: number;
                  _days: Day[];
                }>(`${FIREBASE_URL}challenge/${currentUser.id}.json?auth=${currentUser.token}`);
            }),
            tap(resData => {
                if (resData) {
                    const loadedChallenge = new Challenge(
                        resData.title,
                        resData.description,
                        resData.year,
                        resData.month,
                        resData._days
                    );
                    this._currentChallenge.next(loadedChallenge);
                }
            })
        );
    }

    createNewChallenge(title: string, description: string) {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const newChallenge = new Challenge(title, description, year, month);
        this.saveToServer(newChallenge);
        this._currentChallenge.next(newChallenge);
    }

    updateChallenge(title: string, description: string) {
        let uc: Challenge;
        this._currentChallenge.pipe(take(1)).subscribe(c => {
            uc = new Challenge(title, description, c.year, c.month, c.days);
            this.saveToServer(uc);
            this._currentChallenge.next(uc);
        });
    }

    updateDayStatus(dayInMonth: number, status: DayStatus) {
        this._currentChallenge.pipe(take(1)).subscribe(challenge => {
            if (!challenge || challenge.days.length < dayInMonth) {
                return;
            }
            const dayIndex = challenge.days.findIndex(
                d => d.dayInMonth === dayInMonth
            );
            challenge.days[dayIndex].status = status;
            this._currentChallenge.next(challenge);
            this.saveToServer(challenge);
        });
    }

    cleanUp() {
        this._currentChallenge.next(null);
    }

    private saveToServer(challenge: Challenge) {
        this.authService.user.pipe(
            switchMap(currentUser => {
                if (!currentUser || !currentUser.isAuth) {
                    return;
                }
                return this.http.put(`${FIREBASE_URL}challenge/${currentUser.id}.json?auth=${currentUser.token}`, challenge);
            }),
        ).subscribe(res => {
            console.log(res);
        });
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
