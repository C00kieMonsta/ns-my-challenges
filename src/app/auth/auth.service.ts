import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private _isLoggedIn: boolean;

    get isLoggedIn() {
        return this._isLoggedIn;
    }

    set isLoggedIn(auth) {
        this._isLoggedIn = auth;
    }

    constructor() {
        this._isLoggedIn = false;
    }

}
