import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChallengesService } from '../challenges.service';
import { Challenge } from '../challenge.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'ns-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss'],
  moduleId: module.id
})
export class ChallengeEditComponent implements OnInit {

    form: FormGroup;
    isCreating = true;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: RouterExtensions,
        private pageRoute: PageRoute,
        private challengesService: ChallengesService
    ) {}

    ngOnInit() {

        // init form
        this.form = new FormGroup({
            title: new FormControl(null, {validators: [Validators.required]}),
            description: new FormControl(null, {validators: [Validators.required]}),
        });

        // what mode?
        this.pageRoute.activatedRoute.subscribe(activatedRoute => {
            activatedRoute.paramMap.subscribe(paramMap => {
                if (!paramMap.has('mode')) {
                    this.isCreating = true;
                } else {
                    this.isCreating = paramMap.get('mode') !== 'edit';
                }

                if (!this.isCreating) {
                    this.challengesService.currentChallenge.pipe(take(1)).subscribe(c => this.updateForm(c));
                }

            });
        });
    }

    updateForm(challenge: Challenge) {
        this.form = new FormGroup({
            title: new FormControl(challenge.title, {validators: [Validators.required]}),
            description: new FormControl(challenge.description, {validators: [Validators.required]}),
        });
    }

    onSubmit() {
        // get form values
        if (this.isCreating) {
            this.challengesService.createNewChallenge(this.form.get('title').value, this.form.get('description').value)
        } else {
            this.challengesService.updateChallenge(this.form.get('title').value, this.form.get('description').value);
        }
        this.router.backToPreviousPage();
    }
}
