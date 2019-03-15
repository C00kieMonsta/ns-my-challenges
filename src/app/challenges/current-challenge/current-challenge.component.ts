import { Component } from '@angular/core';
import { RouterExtensions, PageRoute } from 'nativescript-angular/router';

@Component({
 selector: 'ns-current-challenge',
 templateUrl: './current-challenge.component.html',
 styleUrls: ['./current-challenge.component.css'],
 moduleId: module.id,
})
export class CurrentChallengeComponent {

    constructor(private router: RouterExtensions) {}

    onEdit() {
        this.router.navigate(['/challenges/edit'], {transition: {
            name: 'leftSlide'
        }});
    }
}
