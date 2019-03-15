import { Component, ViewContainerRef } from '@angular/core';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { DayModalComponent } from '../day-modal/day-modal.component';
import { UIService } from '~/app/shared/ui/ui.service';

@Component({
    selector: 'ns-current-challenge',
    templateUrl: './current-challenge.component.html',
    styleUrls: [
        './_current-challenge.component.common.scss',
        './current-challenge.component.scss'
    ],
    moduleId: module.id,
})
export class CurrentChallengeComponent {

    constructor(
        private modalDialog: ModalDialogService,
        private vcRef: ViewContainerRef,
        private uiService: UIService,
    ) {}


    onChangeStatus() {
        /**
         * The view container ref decides where the modal should be loaded exactly. Angular is built
         * accoring to view containers, every component is rendered into a view container
         *
         * Every component has a viewcontainer ref where it belongs to and you need to tell native script
         * into which vc ref this modal should be rendred and this acts as an overlay and overlapse the
         * component to which the vc ref belongs to because the modal is assigned to the same vc ref
         *
         * But here the vcRef is the one from the current challenge component whihc sits inside the tabsComp
         * so we will still see tabs below. We need access instead to the vcRef of the appComponent. We do that
         * with the ui Service whihc is in the root so it has access to the ref of the appComponent
         *
         * This is not enough because we do not use its selector nor its component in the code, it is
         * not enough to add the component to the module, we still need to do smth else we need the
         * EntrycComponents whihc contains any components that Angular should be prepared to create
         */
        this.modalDialog.showModal(
            DayModalComponent,
            {
                fullscreen: true,
                viewContainerRef: this.uiService.rootVCRef ? this.uiService.rootVCRef : this.vcRef,
                context: { date: new Date() }
            }
        ).then((input: string) => {

        });
    }
}
