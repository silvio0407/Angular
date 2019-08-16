import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router){}
    
    // not logged in so redirect to login page with the return url
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}