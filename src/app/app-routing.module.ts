import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: 'auth', loadChildren: '~/app/auth/auth.module#AuthModule' },
    { path: 'challenges', loadChildren: '~/app/challenges/challenges.module#ChallengesModule', canLoad: [AuthGuard] },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
