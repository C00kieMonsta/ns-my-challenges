import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    NativeScriptCommonModule,
    WelcomeRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WelcomeModule { }
