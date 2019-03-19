import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { SharedModule } from './shared/shared.module';
import { DayModalComponent } from './challenges/day-modal/day-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { ChallengeActionsModule } from './challenges/challenge-actions/challenge-actions.module';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    ReactiveFormsModule,
    NativeScriptUISideDrawerModule,
    AppRoutingModule,
    SharedModule,
    ChallengeActionsModule
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    DayModalComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  entryComponents: [DayModalComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
