import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, ChangeDetectorRef, ViewContainerRef } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { UIService } from "./shared/ui/ui.service";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    styleUrls: ['./app.component.css'],
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

    @ViewChild(RadSideDrawerComponent) drawerComponent: RadSideDrawerComponent;

    myChallenges: Array<string> = [];
    private drawerSub: Subscription;
    private drawer: RadSideDrawer;

    constructor(
        private uiService: UIService,
        private changeDetectionRef: ChangeDetectorRef,
        private vcRef: ViewContainerRef,
    ) {}

    ngOnInit() {
        this.drawerSub = this.uiService.drawerState.subscribe((s) => {
            if (this.drawer) {
                this.drawer.toggleDrawerState();
            }
        });
        this.uiService.setViewVCRef(this.vcRef);
    }

    ngAfterViewInit() {
        /**
         * Here we manually have to run change detection, it is a mecanisme built in Angular
         * that checks if it needs to rerendre the UI
         */
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    }

    addChallenge(event) {
        this.myChallenges.push(event);
    }

    onLogOut() {
        this.uiService.toggleDrawer();
    }

    ngOnDestroy() {
        this.drawerSub.unsubscribe();
    }
}
