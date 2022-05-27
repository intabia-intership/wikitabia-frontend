import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { IUser } from '../models/login.interfaces';
import { ERoutesPath } from '../models/routes';

@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private router: Router) {}

    get token(): string | null {
        return localStorage.getItem('wikitabia-token');
    }

    set token(value: string | null) {
        if (value) {
            localStorage.setItem('wikitabia-token', value);
        } else {
            localStorage.clear();
        }
    }

    get isAuthenticated(): boolean {
        return !!this.token;
    }

    login(user: IUser): Observable<string | null> {
        // TODO: реализовать асинхронное получение токена с бэка
        return of('123token')
        .pipe(
            tap((response) => this.token = response)
        );
    }

    logout() {
        this.token = null;
        this.router.navigateByUrl(ERoutesPath.LOGIN);
    }
}
