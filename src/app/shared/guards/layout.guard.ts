import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild
 } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { ELayout } from '../models/layout.enums';
import { LayoutBridgeService } from '../services/layout-bridge.service';

@Injectable({
  providedIn: 'root'
})
export class LayoutGuard implements CanActivate, CanActivateChild {
  constructor(
    private layoutBridge: LayoutBridgeService,
  ) { }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const header: ComponentType<HeaderComponent> | null = next.data[ELayout.HEADER] ?? null;
    this.layoutBridge.setHeaderComponent(header);
    return true;
  }

  canActivateChild(next: ActivatedRouteSnapshot): boolean {
    return this.canActivate(next);
  }
}
