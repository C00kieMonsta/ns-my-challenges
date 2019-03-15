import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { AuthService } from '~/app/auth/auth.service';

@Component({
  selector: 'ns-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  moduleId: module.id,
})
export class AuthenticationComponent implements OnInit {

    constructor(
        private router: RouterExtensions,
        private authService: AuthService,
    ) { }

    ngOnInit() {}

    onSignIn() {
      // the slash is important to make it an absolute path
      this.authService.isLoggedIn = true;
      this.router.navigate(['/challenges'], {clearHistory: true});
    }

}
