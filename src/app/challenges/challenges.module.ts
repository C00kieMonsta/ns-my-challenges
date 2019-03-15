import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { CurrentChallengeComponent } from './current-challenge/current-challenge.component';
import { ChallengeEditComponent } from './challenge-edit/challenge-edit.component';
import { TodayComponent } from './today/today.component';
import { ChallengeTabsComponent } from './challenge-tabs/challenge-tabs.component';

@NgModule({
  declarations: [
    CurrentChallengeComponent,
    ChallengeEditComponent,
    TodayComponent,
    ChallengeTabsComponent,
  ],
  imports: [
    NativeScriptCommonModule,
    ChallengesRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengesModule { }
