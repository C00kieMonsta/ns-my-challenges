import { Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { AuthGuard } from '../auth/auth.guard';

/**
 * Provides helper methods to create routes.
 */
export class Route {

  static withShell(routes: Routes): Routes {
    return [{
      path: '',
      component: ShellComponent,
      children: routes,
    //   canActivate: [AuthGuard],
    //   canActivateChild: [AuthGuard]
    }];
  }

}
