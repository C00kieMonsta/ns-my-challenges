import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
          ngModule: AuthModule,
          providers: [
            AuthGuard,
            AuthService,
          ]
        };
      }
}
