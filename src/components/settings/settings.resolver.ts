import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SettingsService, Setting } from './settings.service';

@Injectable()
export class SettingsResolver implements Resolve<any> {
    constructor(
        private settingsService: SettingsService
    ) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Setting[]> {
        return Observable.fromPromise(this.settingsService.getSettingsFromCategory(route.params['category']));
    }
}