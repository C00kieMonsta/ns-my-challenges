import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

import { AppComponent } from './app.component';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';
import { DayModalComponent } from './challenges/day-modal/day-modal.component';
import { AppRoutingModule } from './app-routing.module';
import { ChallengeActionsModule } from './challenges/challenge-actions/challenge-actions.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpClientModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        ChallengeActionsModule
    ],
    declarations: [AppComponent, DayModalComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents: [DayModalComponent]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
