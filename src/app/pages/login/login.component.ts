import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/models/login.interfaces';
import { ERoutesPath } from 'src/app/shared/models/routes';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  fb = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  login() {
    if (this.fb.invalid) {
      return;
    }
    const user: IUser = this.fb.getRawValue();
    this.auth.login(user).subscribe(() => {
      this.router.navigateByUrl(ERoutesPath.ARTICLES);
    });
  }
}
