import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { take } from 'rxjs/operators';

import { Challenge } from './challenge.model';
import { DayStatus } from './day.model';

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

    get currentChallenge() {
        return this._currentChallenge.asObservable();
    }

    createNewChallenge(title: string, description: string) {
        const year = new Date().getFullYear();
        const month = new Date().getMonth();
        const newChallenge = new Challenge(title, description, year, month);
        // Save it to server
        this._currentChallenge.next(newChallenge);
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
