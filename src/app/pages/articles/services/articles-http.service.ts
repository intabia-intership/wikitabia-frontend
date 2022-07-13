import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { IFilter } from 'src/app/shared/models/article.interfaces';
import { InPageInfo, InSort } from '@intabia/angular-ui';
import { IArticle, IArticleInfo, IArticlesInfo } from 'src/app/shared/models/article.interfaces';
import { INewArticle } from 'src/app/shared/models/article.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ArticlesHttpService {
  readonly content = [
    {
      id: '1',
      article: 'Hello World',
      link: 'https://intabia.ru',
      tags: ['1', '2', '3', '4'],
      difficulty: '1',
      description: 'Статья для новичков\n+6',
      thumb_up: 42,
      thumb_down: 24
    },
    {
      id: '2',
      article: 'Как соблюдать сроки?',
      link: 'https://intabia.ru',
      tags: ['1', '4'],
      difficulty: '3',
      description: '18+',
      thumb_up: 24,
      thumb_down: 42
    }
  ];
  readonly pageInfo = {
    offset: 0,
    pageSize: 1,
    total: 2
  };

  constructor(private http: HttpClient) { }

  getArticles(
    params: InPageInfo,
    sort: InSort | null,
    filter: IFilter | null,
  ): Observable<IArticlesInfo> {
    // TODO: реализовать, когда будет бэк
    return of({
      content: this.content,
      pageInfo: this.pageInfo,
    });
  }

  getArticle(id: string): Observable<IArticle> {
    // TODO: реализовать, когда будет бэк
    return of(
      this.content.find((item) => item.id === id) ?? {} as IArticle
    ).pipe(
      delay(1000)
    );
  }

  addArticle(newArticle: INewArticle) {
    // TODO: реализовать, когда будет бэк
  }

  updateArticle(id: string, article: IArticleInfo) {
    // TODO: реализовать, когда будет бэк
    return of(true);
  }

  deleteArticle(id: string) {
    // TODO: реализовать, когда будет бэк
  }
}
