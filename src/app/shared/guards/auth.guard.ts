import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
 } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn();
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }
}
