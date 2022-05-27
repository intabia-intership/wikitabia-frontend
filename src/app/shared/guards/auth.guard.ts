import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
 } from '@angular/router';
import { ERoutesPath } from 'src/app/shared/models/routes';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    } else {
      this.router.navigateByUrl(ERoutesPath.LOGIN);
      this.authService.logout();
      return false;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }
}
