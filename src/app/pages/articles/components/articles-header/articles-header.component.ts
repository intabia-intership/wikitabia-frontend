import { Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { AuthService } from 'src/app/shared/services/auth.service';
import { AddArticleComponent } from 'src/app/pages/articles/components/add-article/add-article.component';
import { INewArticle } from 'src/app/shared/models/article.interfaces';
import { ArticlesHttpService } from 'src/app/pages/articles/services/articles-http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-header',
  templateUrl: './articles-header.component.html',
})
export class ArticlesHeaderComponent extends HeaderComponent implements OnDestroy {
  protected sub: Subscription = new Subscription();

  buttons = [
    {
      name: 'Добавить статью',
    },
  ];

  constructor(
    protected override auth: AuthService,
    protected override router: Router,
    private dialog: MatDialog,
    private articlesHttp: ArticlesHttpService,
  ) {
    super(auth, router);
    this.selectedToolbarItem = 'articles';
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  buttonActionClick() {
    const dialog = this.dialog.open<AddArticleComponent, null, INewArticle>(AddArticleComponent);
    this.sub.add(
      dialog.afterClosed()
      .subscribe((newArticle) => {
        if (newArticle) {
          this.articlesHttp.addArticle(newArticle);
        }
      })
    );
  }
}
