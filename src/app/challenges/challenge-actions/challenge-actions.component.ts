import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DayStatus } from '../day.model';

@Component({
  selector: 'ns-challenge-actions',
  templateUrl: './challenge-actions.component.html',
  styleUrls: ['./challenge-actions.component.scss'],
  moduleId: module.id
})
export class ChallengeActionsComponent implements OnInit, OnChanges {

    @Output() actionSelect = new EventEmitter<DayStatus>();
    @Input() cancelText = 'Cancel';
    @Input() chosen: 'complete' | 'fail' = null;

    action: 'complete' | 'fail' = null;
    done = false;

    constructor() {}

    ngOnInit() {}

    // executed whenever one of the input receives a value
    ngOnChanges(changes: SimpleChanges) {
        // we are only interested in chosen input
        if (changes.chosen) {
            this.action = changes.chosen.currentValue;
            if (changes.chosen.currentValue === null) {
                this.done = false;
            }
        }
    }

    onAction(action: 'complete' | 'fail' | 'cancel') {
        let status = DayStatus.Open;
        switch (action) {
            case 'complete':
                status = DayStatus.Completed;
                this.action = 'complete';
                break;
            case 'fail':
                status = DayStatus.Failed;
                this.action = 'fail';
                break;
            case 'cancel':
                this.action = null;
                this.done = false;
                break;
            default:
                break;
        }
        this.actionSelect.emit(status);
    }
}
