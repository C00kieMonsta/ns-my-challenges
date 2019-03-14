import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    styleUrls: ['./app.component.css'],
    templateUrl: "./app.component.html"
})
export class AppComponent {
    myChallenges: Array<string> = [];

    constructor() {}

    addChallenge(event) {
        this.myChallenges.push(event);
    }
}
