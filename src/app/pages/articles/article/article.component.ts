import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArticlesHttpService } from 'src/app/pages/articles/services/articles-http.service';
import { IDifficultyOptions, ITagOptions } from 'src/app/shared/models/article.interfaces';
import { IArticle, IArticleInfo } from 'src/app/shared/models/article.interfaces';
import { ListsHttpService } from 'src/app/shared/services/lists-http.service';
import { TagsService } from 'src/app/shared/services/tags.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  private articleId: string;
  currentArticle: IArticle | null = null;
  difficultyOptions: IDifficultyOptions[] = [];
  isArticleView = true;
  difficultyName = '';
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private articlesHttp: ArticlesHttpService,
    private listsHttp: ListsHttpService,
    private tagsService: TagsService,
  ) {
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
    this.loading = true;
    this.sub.add(
      this.articlesHttp.getArticle(this.articleId)
        .subscribe((currentArticle: IArticle) => {
          this.currentArticle = currentArticle;
          // TODO: заменить на обычное присваивание, когда будет бэк
          this.tagsService.tags = Array.from(this.currentArticle.tags);
          this.loading = false;
        })
    );
  }

  getTags() {
    this.sub.add(
      this.listsHttp.getTags()
        .subscribe((tags: ITagOptions[]) => {
          this.tagsService.tagsOptions = tags;
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
          {
            ...articleInfo,
            tags: this.tagsService.tags,
          },
        ).subscribe()
      );
    } else {
      this.tagsService.resetTags();
    }
    this.isArticleView = true;
  }

  // TODO: добавить модалку с предупреждением, когда будет готова
  deleteArticle() {
    this.sub.add(
      this.articlesHttp.deleteArticle(this.articleId)
    );
  }
}
