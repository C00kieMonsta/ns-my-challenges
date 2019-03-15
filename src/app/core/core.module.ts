import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';

@NgModule({
  declarations: [ShellComponent, HeaderComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule,
    NativeScriptUISideDrawerModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CoreModule { }
