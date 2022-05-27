import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderComponent } from './shared/components/header/header.component';
import { LayoutBridgeService } from './shared/services/layout-bridge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  headerPortal: ComponentPortal<HeaderComponent> | null = null;

  constructor(
    private layoutBridge: LayoutBridgeService
  ) { }

  ngOnInit(): void {
    this.getHeaderComponent();
  }

  ngOnDestroy(): void {
    if (this.headerPortal) {
      this.headerPortal.detach();
    }

    this.sub.unsubscribe();
  }

  getHeaderComponent() {
    this.sub.add(
      this.layoutBridge
        .getHeaderComponent()
        .subscribe((header: ComponentType<HeaderComponent> | null) => {
          this.headerPortal = header ? new ComponentPortal(header) : null;
        })
    );
  }
}
