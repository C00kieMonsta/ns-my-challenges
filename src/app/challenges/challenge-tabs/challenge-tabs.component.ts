import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ActivatedRoute } from '@angular/router';
import { Page } from 'tns-core-modules/ui/page/page';

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
        private activeRoute: ActivatedRoute,
        private page: Page,
    ) { }

    ngOnInit() {
        const outlets = {
            currentChallenge: ['current-challenge'],
            today: ['today']
        };
        this.router.navigate([{ outlets }], { relativeTo: this.activeRoute });

        // if you do not add this, you get two action bars on android
        this.page.actionBarHidden = true;
    }
}
