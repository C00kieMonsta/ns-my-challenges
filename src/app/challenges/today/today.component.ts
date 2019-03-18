import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChallengesService } from '../challenges.service';
import { Day, DayStatus } from '../day.model';

@Component({
  selector: 'ns-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
  moduleId: module.id
})
export class TodayComponent implements OnInit, OnDestroy {
    currentDay: Day;
    private curChallengeSub: Subscription;

    constructor(private challengeService: ChallengesService) {}

    ngOnInit() {
        this.curChallengeSub = this.challengeService.currentChallenge.subscribe(
            challenge => {
                if (challenge) {
                    this.currentDay = challenge.currentDay;
                }
            }
        );
    }

    onActionSelected(action: DayStatus) {
        this.challengeService.updateDayStatus(this.currentDay.dayInMonth, action);
    }

    getStatusName() {
        switch (this.currentDay.status) {
            case DayStatus.Completed:
                return 'complete';
            case DayStatus.Failed:
                return 'fail';
            default:
                return null;
        }
    }

    ngOnDestroy() {
        if (this.curChallengeSub) {
            this.curChallengeSub.unsubscribe();
        }
    }
}
