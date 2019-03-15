import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ChallengesModule } from './challenges/challenges.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './welcome/welcome.module';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        CoreModule,
        AuthModule.forRoot(),
        ChallengesModule,
        SharedModule,
        WelcomeModule
    ],
    declarations: [AppComponent],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
