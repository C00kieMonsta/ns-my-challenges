import { Component } from '@angular/core';
import { isAndroid } from 'tns-core-modules/platform';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';


// this is a variable that is accessible everywhere in your adroidn code
// but typescript doesn't know that it is globally available so we have to
// declare it
declare var android: any;

@Component({
 selector: 'ns-current-challenge',
 templateUrl: './current-challenge.component.html',
 styleUrls: ['./current-challenge.component.css'],
 moduleId: module.id,
})
export class CurrentChallengeComponent {

    constructor(
        private router: RouterExtensions,
        private page: Page,
    ) {}

    onEdit() {
        this.router.navigate(['/edit-challenge']);
    }

    // The Android back button color cannot be changed easily, we have to do it like this
    // We call this function on the "loaded" event of the action bar
    onLoadedActionBar() {
        if (isAndroid) {
            const androidToolBar = this.page.actionBar.nativeView;
            const backButton = androidToolBar.getNavigationIcon();
            if (backButton) {
                /**
                 * This is native code you have to call through the Javascript bridge
                 */
                backButton.setColorFilter(
                    android.graphics.Color.parseColor('#888888'),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP // this controls how color filter is applied
                );
            }
        }
    }

}
