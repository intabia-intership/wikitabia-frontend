import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InPageInfo } from '@intabia/angular-ui';
import { Subscription } from 'rxjs';
import { IComment, ICommentsInfo, INewComment } from 'src/app/shared/models/comment.interfaces';
import { ArticleCommentsHttpService } from '../../../services/article-comments-http.service';

@Component({
  selector: 'app-article-comments-list',
  templateUrl: './article-comments-list.component.html',
  styleUrls: ['./article-comments-list.component.scss']
})
export class ArticleCommentsListComponent implements OnInit {
  private sub: Subscription = new Subscription();

  comments: IComment[] = [];
  pageInfo: InPageInfo = {
    offset: 0,
    pageSize: 5,
    total: 10,
  }
  articleId = this.route.snapshot.params['id'];
  loading = false;
  loadingOnScroll = false;

  constructor(
    private commentsHttp: ArticleCommentsHttpService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.loading = true;
    this.sub.add(
      this.commentsHttp.getComments(
        this.articleId,
        this.pageInfo,
      ).subscribe(({ content, pageInfo }: ICommentsInfo) => {
        this.comments = content;
        this.pageInfo = pageInfo;
        this.loading = false;
      })
    )
  }

  loadMore() {
    this.loadingOnScroll = true;
    this.sub.add(
      this.commentsHttp.getComments(
        this.articleId,
        this.pageInfo,
      ).subscribe(({ content, pageInfo }: ICommentsInfo) => {
        this.comments = [...this.comments, ...content];
        this.pageInfo = pageInfo;
        this.loading = false;
      })
    )
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadMore();
    }
  }

  saveComment(comment: INewComment) {
    this.sub.add(
      this.commentsHttp.editComment(this.articleId, comment).subscribe(
        () => {
          this.getComments();
        }
      )
    )
  }

  deleteComment(commentId: string) {
    this.sub.add(
      this.commentsHttp.deleteComment(commentId, this.articleId).subscribe(
        () => {
          this.getComments();
        }
      )
    )
  }

  addComment(comment: string) {
    this.sub.add(
      this.commentsHttp.addComment(
        this.articleId,
        comment,
      ).subscribe(
        () => {
          this.getComments();
        }
      )
    )
  }
}
