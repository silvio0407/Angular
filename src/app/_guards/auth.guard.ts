import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private router: Router,
        private authService: AuthService
        ){}
    
    // not logged in so redirect to login page with the return url
   /* canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }*/

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isLoggedIn();
      }
}