import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * 'providedIn root' is to make sure that this service is provided on the root injector
 * of the application. Therefore all the components in this app that request an instance
 * of this service get the same instance => singleton
 */

@Injectable({ providedIn: 'root' })
export class UIService {

    /**
     * This is essentially like an eventemitter which also has a starting value in case we
     * are listening on it before an event has been emitted
     */
    private _drawerState = new BehaviorSubject<void>(null);

    get drawerState() {
        return this._drawerState.asObservable();
    }

    constructor() {}

    toggleDrawer() {
        this._drawerState.next(null);
    }

}
