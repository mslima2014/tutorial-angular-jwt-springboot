import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { TOKEN_KEY } from './../_helpers/auth-constants';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if ( sessionStorage.getItem(TOKEN_KEY) ) {
            // logged in so return true
            console.log('logged in so return true');
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

    private isEmptyObject(obj) {
      return (obj && (Object.keys(obj).length === 0));
    }
}
