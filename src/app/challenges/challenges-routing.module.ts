import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';

import { TodayComponent } from './today/today.component';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';
import { Route } from '../core/route.service';

const routes: Routes = Route.withShell([
    { path: '', component: ChallengeTabsComponent, children: [
        { path: 'today', component: TodayComponent, outlet: 'today' },
        {
          path: 'current-challenge',
          component: CurrentChallengeComponent,
          outlet: 'currentChallenge'
        }
      ]
    },
    { path: 'edit-challenge', component: ChallengeEditComponent },
]);


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
export class ChallengesRoutingModule { }
