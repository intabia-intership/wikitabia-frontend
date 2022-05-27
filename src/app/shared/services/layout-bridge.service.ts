import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HeaderComponent } from '../components/header/header.component';

@Injectable({
    providedIn: 'root'
})
export class LayoutBridgeService {
    private headerComponent = new Subject<ComponentType<HeaderComponent> | null>();

    setHeaderComponent(component: ComponentType<HeaderComponent> | null) {
        this.headerComponent.next(component);
    }

    getHeaderComponent(): Observable<ComponentType<HeaderComponent> | null> {
        return this.headerComponent.asObservable();
    }
}
