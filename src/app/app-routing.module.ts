import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { TodayComponent } from './challenges/today/today.component';
import { CurrentChallengeComponent } from './challenges/current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './challenges/challenge-edit/challenge-edit.component';

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: 'today', component: TodayComponent },
    { path: 'current-challenge', component: CurrentChallengeComponent },
    { path: 'edit-challenge', component: ChallengeEditComponent },
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
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }