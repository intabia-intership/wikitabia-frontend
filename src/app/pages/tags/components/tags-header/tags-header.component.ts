import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AddTagComponent } from 'src/app/pages/tags/components/add-tag/add-tag.component';
import { INewTag } from 'src/app/shared/models/tags.interfaces';
import { TagsHttpService } from 'src/app/pages/tags/services/tags-http.service';

@Component({
  selector: 'app-tags-header',
  templateUrl: './tags-header.component.html',
})
export class TagsHeaderComponent extends HeaderComponent implements OnDestroy {
  protected sub: Subscription = new Subscription();
  
  buttons = [
    {
      name: 'Добавить тег',
    },
  ];

  constructor(
    protected override auth: AuthService,
    protected override router: Router,
    private dialog: MatDialog,
    private tagsHttp: TagsHttpService,
  ) {
    super(auth, router);
    this.selectedToolbarItem = 'tags';
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  buttonActionClick() {
    const dialog = this.dialog.open<AddTagComponent, null, INewTag>(AddTagComponent);
    this.sub.add(
      dialog.afterClosed()
      .subscribe((newTag) => {
        if (newTag) {
          this.tagsHttp.addTag(newTag);
        }
      })
    );
  }
}
