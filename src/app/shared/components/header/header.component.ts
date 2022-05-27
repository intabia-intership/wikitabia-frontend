import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  template: '',
})
export class HeaderComponent {
  toolBarMenu = [
    {
      name: 'Статьи',
      value: 'articles'
    },
    {
      name: 'Теги',
      value: 'tags'
    },
  ];
  selectedToolbarItem = '';

  constructor(
    protected auth: AuthService,
    protected router: Router,
  ) { }

  navigate(item: string): void {
    this.selectedToolbarItem = item;
    this.router.navigate([`/${item}`]);
  }

  exitActionClick() {
    this.auth.logout();
  }
}
