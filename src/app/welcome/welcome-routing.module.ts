import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
    { path: 'welcome', component: AuthenticationComponent },
];

/**
 * Similarily as with the BrowserModule, here we are also going to use the native script module
 * for routing, because navigation works differently on mobile than in the web
 *
 * <page-router-outlet> is a special directive provided by native script for navigation. In mobile apps
 * we say that it is a stack based navigation, there are no urls. Views stack upon each other, so you
 * push and pop views on/from the stack
 */
@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WelcomeRoutingModule { }
