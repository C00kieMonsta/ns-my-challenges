import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
        private pageRoute: PageRoute
    ) {}

    ngOnInit() {
        // this.activatedRoute.paramMap.subscribe(paramMap => {
        //   console.log(paramMap.get('mode'));
        // });
        this.pageRoute.activatedRoute.subscribe(activatedRoute => {
            activatedRoute.paramMap.subscribe(paramMap => {
                if (!paramMap.has('mode')) {
                    this.isCreating = true;
                } else {
                    this.isCreating = paramMap.get('mode') !== 'edit';
                }
            });
        });

        this.form = new FormGroup({
            title: new FormControl(null, {validators: [Validators.required]}),
            description: new FormControl(null, {validators: [Validators.required]}),
        });
    }

    onSubmit() {
        // get form values
        this.router.backToPreviousPage();
    }
}
