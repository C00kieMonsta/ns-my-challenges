import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute } from 'nativescript-angular/router';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.css'],
  moduleId: module.id,
})
export class ChallengeEditComponent implements OnInit {

    isCreating: boolean;

    constructor(
        private activatedRoutes: ActivatedRoute,
        private pageRoute: PageRoute
    ) {
        this.isCreating = true;
    }

    ngOnInit() {
        // this.activatedRoutes.paramMap.subscribe(param => {
        //     this.isCreating = (param.get('mode') === 'edit');
        // });

        /**
         * This works but not with a stack navigation approach, because you lose
         * because you lose the subscription when navigating back because the page
         * is fetched from cache when nagivigating back
         */
        this.pageRoute.activatedRoute.subscribe(activatedRoute => {
            activatedRoute.paramMap.subscribe(param => {
                if (!param.get('mode')) {
                    this.isCreating = true;
                } else {
                    this.isCreating = param.get('mode') !== 'edit';
                }
            });
        });
    }
}
