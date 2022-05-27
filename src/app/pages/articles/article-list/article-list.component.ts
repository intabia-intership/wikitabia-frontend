import { Component, OnDestroy, OnInit } from '@angular/core';
import { InPageInfo, InSort, InNavigateTo } from '@intabia/angular-ui';
import { Subscription } from 'rxjs';
import { ArticlesPageInfo } from 'src/app/shared/models/articles.classes';
import { IDifficultyOptions, IFilter, ITagOptions } from 'src/app/shared/models/article.interfaces';
import { ETableNavigateTypes } from 'src/app/shared/models/table.enums';
import { IArticle, IArticlesInfo } from 'src/app/shared/models/article.interfaces';
import { ListsHttpService } from 'src/app/shared/services/lists-http.service';
import { ArticlesHttpService } from 'src/app/pages/articles/services/articles-http.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  articles: IArticle[] = [];
  pageInfo: InPageInfo = new ArticlesPageInfo();
  sort: InSort | null = null;
  filter: IFilter | null = null;
  tagsFilterOptions: ITagOptions[] = [];
  difficultyFilterOptions: IDifficultyOptions[] = [];

  constructor(
    private articlesHttp: ArticlesHttpService,
    private listsHttp: ListsHttpService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getData() {
    this.getArticles();
    this.getTags();
    this.getDifficultyList();
  }

  getArticles() {
    this.sub.add(
      this.articlesHttp.getArticles(
          this.pageInfo,
          this.sort,
          this.filter
        )
        .subscribe(({content, pageInfo}: IArticlesInfo) => {
          this.articles = content;
          this.pageInfo = pageInfo;
        })
    );
  }

  getTags() {
    this.sub.add(
      this.listsHttp.getTags()
        .subscribe((tags: ITagOptions[]) => {
          this.tagsFilterOptions = tags;
        })
    );
  }

  getDifficultyList() {
    this.sub.add(
      this.listsHttp.getDifficultyList()
        .subscribe((difficultyList: IDifficultyOptions[]) => {
          this.difficultyFilterOptions = difficultyList;
        })
    );
  }

  navigate(event: InNavigateTo) {
    if (!this.pageInfo) {
      return;
    }
    const {next, prev, first, last} = ETableNavigateTypes;
    const {offset, total, pageSize} = this.pageInfo;
    this.pageInfo.offset = {
      [next]: offset + 1,
      [prev]: offset - 1,
      [first]: 0,
      [last]: (total / pageSize) - 1,
    }[event];
    this.getArticles();
  }

  changeSort(sort: InSort) {
    this.sort = sort;
    // Пока что вместо этого сортировка на фронте
    // this.getArticles();
  }

  changeFilter(filter: IFilter) {
    this.filter = filter;
    this.getArticles();
  }
}
