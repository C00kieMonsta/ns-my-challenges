import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule { }
