import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take, tap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import { Challenge } from './challenge.model';
import { DayStatus, Day } from './day.model';

/**
 * If you want to provide the service only to the challenges module, you add this to
 * the providers of the challenges module. In our case here we want the service to be
 * provided to the root element because we want the service to be a singleton. It has
 * to be accessible evrywhere as one single instance
 */

@Injectable({ providedIn: 'root' })
export class ChallengesService {

    /**
     * The BehaviorSubject is like an event emitter but when you subscribe to it,
     * it gives you the lastest value
     */
    private _currentChallenge = new BehaviorSubject<Challenge>(null);
    private _rootUrl: string;

    constructor(private http: HttpClient) {
        this._rootUrl = 'https://ns-my-challenges.firebaseio.com/';
    }

    get currentChallenge() {
        return this._currentChallenge.asObservable();
    }

    fetchCurrentChallenge() {
        return this.http.get<{
            title: string,
            description: string,
            year: number,
            month: number,
            _days: Day[],
        }>(`${this._rootUrl}challenge.json`).pipe(
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
        // Save it to server
        this.http.put(`${this._rootUrl}challenge.json`, newChallenge).subscribe(res => {
            // succes
        }, err => {
            // error
        });
        this._currentChallenge.next(newChallenge);
    }

    updateChallenge(title: string, description: string) {
        let uc: Challenge;
        this._currentChallenge.pipe(take(1)).subscribe(c => {
            uc = new Challenge(title, description, c.year, c.month, c.days);
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
          // Save this to a server
        });
    }
}
