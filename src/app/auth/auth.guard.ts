import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';

import { AuthService } from './auth.service';
import { take, switchMap, tap } from 'rxjs/operators';
import { RouterExtensions } from 'nativescript-angular/router';

/**
 * The CanLoad interface is used to ensure that the lazy loaded module can
 * be loaded if it respects some conditions like being authenticated
 */

@Injectable()
export class AuthGuard implements CanLoad {

    constructor(
        private authService: AuthService,
        private router: RouterExtensions,
    ) {}

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.user.pipe(
            take(1),
            switchMap(currentUser => {
                if (!currentUser || !currentUser.token) {
                    // if there is no current user we can try to auto login
                    return this.authService.autoLogin();
                }
                return of(true);
            }),
            // we get true or false from the switchmap, so we can act on this value
            tap(isAuth => {
                if (!isAuth) {
                  this.router.navigate(['/auth']);
                }
            })
        );
    }
}
