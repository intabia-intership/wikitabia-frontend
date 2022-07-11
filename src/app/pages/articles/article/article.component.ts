import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticlesHttpService } from 'src/app/pages/articles/services/articles-http.service';
import { IDifficultyOptions, ITagOptions } from 'src/app/shared/models/article.interfaces';
import { IArticle, IArticleInfo } from 'src/app/shared/models/article.interfaces';
import { ListsHttpService } from 'src/app/shared/services/lists-http.service';
import { MatDialog } from '@angular/material/dialog';
import { WarningComponent } from 'src/app/shared/components/modals/warning/warning.component';
import { IModalData } from 'src/app/shared/models/modal.interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  currentArticle: IArticle | null = null;
  articleForm: FormGroup = new FormGroup({});
  difficultyOptions: IDifficultyOptions[] = [];
  tags: string[] = [];
  tagsOptions: ITagOptions[] = [];
  isArticleView = true;
  articleId: string;
  difficultyName = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private articlesHttp: ArticlesHttpService,
    private listsHttp: ListsHttpService,
    private dialog: MatDialog,
  ) {
    // tslint:disable-next-line: no-string-literal
    this.articleId = this.route.snapshot.params['id'] ?? '';
  }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getData() {
    this.getArticle();
    this.getTags();
    this.getDifficultyList();
    this.getDifficultyName();
  }

  getArticle() {
    this.sub.add(
      this.articlesHttp.getArticle(this.articleId)
        .subscribe((currentArticle: IArticle) => {
          this.currentArticle = currentArticle;
          const { article, link, difficulty, description, tags } = this.currentArticle;
          // TODO: заменить на обычное присваивание, когда будет бэк
          this.tags = Array.from(tags);
          this.articleForm = this.fb.group({
            article,
            link,
            difficulty,
            description,
          });
        })
    );
  }

  getTags() {
    this.sub.add(
      this.listsHttp.getTags()
        .subscribe((tags: ITagOptions[]) => {
          this.tagsOptions = tags;
        })
    );
  }

  getDifficultyList() {
    this.sub.add(
      this.listsHttp.getDifficultyList()
        .subscribe((difficultyList: IDifficultyOptions[]) => {
          this.difficultyOptions = difficultyList;
        })
    );
  }

  getDifficultyName() {
    this.difficultyName = this.difficultyOptions.find(
      (item) => item.id === this.currentArticle?.difficulty
    )?.viewValue ?? '';
  }

  saveArticle(articleInfo: IArticleInfo | null) {
    if (articleInfo) {
      this.sub.add(
        this.articlesHttp.updateArticle(
          this.articleId,
          articleInfo,
        )
      );
    }
    this.isArticleView = true;
  }

  deleteArticle() {
    const dialog = this.dialog.open<WarningComponent, IModalData, boolean>(WarningComponent, {
      data: {
        content: 'Вы уверены, что хотите удалить статью?',
      }
    });
    this.sub.add(
      dialog.afterClosed()
      .subscribe((isDelete) => {
        if (isDelete) { this.articlesHttp.deleteArticle(this.articleId); }
      })
    );
  }
}
