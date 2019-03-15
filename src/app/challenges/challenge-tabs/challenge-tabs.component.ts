import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css'],
  moduleId: module.id,
})
export class ChallengeTabsComponent implements OnInit {

    /**
     * An important distiction with a web app is that the views in an app are already loaded
     *
     * For each routes the content is already loaded and rendered when asked for
     */

    constructor(
        private router: RouterExtensions,
        private activeRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        const outlets = {
            currentChallenge: ['current-challenge'],
            today: ['today']
        };
        this.router.navigate([{ outlets }], { relativeTo: this.activeRoute })
    }

}
