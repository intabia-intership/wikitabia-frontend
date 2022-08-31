import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { from, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private keycloak: KeycloakService) {}

    isLoggedIn(): Observable<boolean> {
        return from(this.keycloak.isLoggedIn());
    }

    logout() {
        this.keycloak.logout();
    }
}
