import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';
import { DayStatus } from '../day.model';

@Component({
  selector: 'ns-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css'],
  moduleId: module.id
})
export class DayModalComponent implements OnInit {

    loadedDate: Date;
    loadedStatus: 'complete' | 'fail' = null;

    constructor(private modalParams: ModalDialogParams) {}

    ngOnInit() {
        const parsedParams = this.modalParams.context as {
            date: Date;
            status: DayStatus;
        };
        this.loadedDate = parsedParams.date;
        switch (parsedParams.status) {
            case DayStatus.Completed:
                this.loadedStatus = 'complete';
                break;
            case DayStatus.Failed:
                this.loadedStatus = 'fail';
                break;
            default:
                this.loadedStatus = null;
                break;
        }
    }

    onHandleInput(action: DayStatus) {
        this.modalParams.closeCallback(action);
    }
}
