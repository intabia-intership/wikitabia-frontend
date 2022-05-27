import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-tags-header',
  templateUrl: './tags-header.component.html',
})
export class TagsHeaderComponent extends HeaderComponent {
  buttons = [
    {
      name: 'Добавить тег',
      value: 'add-tag',
    },
  ];

  constructor(
    protected override auth: AuthService,
    protected override router: Router,
  ) {
    super(auth, router);
    this.selectedToolbarItem = 'tags';
  }

  buttonActionClick(value: string) {
  }
}
