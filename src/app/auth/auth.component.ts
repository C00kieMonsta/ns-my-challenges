import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent implements OnInit {

  constructor(private router: RouterExtensions) { }

  ngOnInit() {}

  onSignIn() {
    // the slash is important to make it an absolute path
    this.router.navigate(['/today'], {clearHistory: true});
  }

}
