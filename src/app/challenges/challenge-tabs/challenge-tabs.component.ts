import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { ChallengesService } from '../challenges.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ns-challenge-tabs',
  templateUrl: './challenge-tabs.component.html',
  styleUrls: ['./challenge-tabs.component.css'],
  moduleId: module.id
})
export class ChallengeTabsComponent implements OnInit, OnDestroy {

    isLoading: boolean;
    currentChallengeSub: Subscription;

    constructor(
        private router: RouterExtensions,
        private active: ActivatedRoute,
        private page: Page,
        private challengeService: ChallengesService
    ) {
        this.isLoading = false;
    }

    ngOnInit() {
        this.isLoading = true;
        this.currentChallengeSub = this.challengeService.fetchCurrentChallenge().subscribe(challenge => {
            this.isLoading = false;
            this.loadTabRoutes();
        }, err => {
            this.isLoading = false;
        });
        this.page.actionBarHidden = true;
    }

    private loadTabRoutes() {
        // the trick here is to add a small timeout
        setTimeout(() => {
            this.router.navigate(
                [
                    {
                        outlets: { currentChallenge: ['current-challenge'], today: ['today'] }
                    }
                ],
                {
                    relativeTo: this.active
                }
            );
        }, 10);
    }

    ngOnDestroy() {
        this.currentChallengeSub.unsubscribe();
    }
}
