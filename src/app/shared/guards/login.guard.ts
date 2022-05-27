import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import { ERoutesPath } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl(ERoutesPath.ARTICLES);
      return false;
    } else {
      return true;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state);
  }
}
