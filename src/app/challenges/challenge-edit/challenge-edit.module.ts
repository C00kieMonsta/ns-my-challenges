import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ChallengeEditComponent } from './challenge-edit.component';
import { SharedModule } from '~/app/shared/shared.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChallengeEditComponent],
  imports: [
    NativeScriptCommonModule,
    // NativeScriptRouterModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    NativeScriptRouterModule.forChild([
      { path: '', component: ChallengeEditComponent }
    ]),
    SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChallengeEditModule {}
