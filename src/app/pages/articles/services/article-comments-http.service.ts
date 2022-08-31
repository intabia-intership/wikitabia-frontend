import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { InPageInfo } from "@intabia/angular-ui";
import { Observable, of } from "rxjs";
import { ICommentsInfo, INewComment } from "src/app/shared/models/comment.interfaces";

@Injectable({
  providedIn: 'root',
})

export class ArticleCommentsHttpService {
  constructor(private http: HttpClient) {}

  readonly content = [
    {
      id: '1',
      userName: 'username',
      publishDate: '29.10.1969',
      publishTime: '21:00',
      value: 'Комментарий'
    },
    {
      id: '2',
      userName: 'username',
      publishDate: '29.10.1969',
      publishTime: '21:00',
      value: 'Комментарий'
    },
    {
      id: '3',
      userName: 'username',
      publishDate: '29.10.1969',
      publishTime: '21:00',
      value: 'Комментарий'
    },
    {
      id: '4',
      userName: 'username',
      publishDate: '29.10.1969',
      publishTime: '21:00',
      value: 'Комментарий'
    }
  ];

  readonly pageInfo = {
    offset: 0,
    pageSize: 1,
    total: 2
  };

  getComments(
    articleId: string,
    params: InPageInfo,
  ): Observable<ICommentsInfo> {
    return of ({
      content: this.content,
      pageInfo: this.pageInfo,
    });
  }

  addComment(articleId: string, comment: string): Observable<any> {
    // TODO интеграция когда будет готов бек
    return of(true);
  }

  editComment(articleId: string, newComment: INewComment): Observable<any> {
    return of(true);
  }

  deleteComment(id: string, articleId: string): Observable<any> {
    // TODO интеграция когда будет готов бек
    // return this.http.delete<string>(
    //   `some api/${articleId}/${id}`
    // )
    return of(true);
  }
}
