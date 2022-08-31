import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesHeaderComponent } from './components/articles-header/articles-header.component';
import { MatIconModule } from '@angular/material/icon';
import { ArticlesTableComponent } from './components/articles-table/articles-table.component';
import { ArticlesSearchComponent } from './components/articles-search/articles-search.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleEditingComponent } from './components/article-editing/article-editing.component';
import { ArticleViewComponent } from './components/article-view/article-view.component';
import { MatSelectModule } from '@angular/material/select';
import {
  InToolbarModule,
  InTableModule,
  InPaginatorModule,
  InTagModule,
  InSelectModule,
  InCardModule,
  InInputModule,
  InButtonModule,
  InTextareaModule,
} from '@intabia/angular-ui';
import { TagListComponent } from 'src/app/shared/components/tag-list/tag-list.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { ArticleCommentsListComponent } from './components/article-comments/article-comments-list/article-comments-list.component';
import { ArticleCommentComponent } from './components/article-comments/article-comment/article-comment.component';
import { ArticleAddCommentComponent } from './components/article-comments/article-add-comment/article-add-comment.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleComponent,
    ArticlesHeaderComponent,
    ArticlesTableComponent,
    ArticlesSearchComponent,
    ArticleEditingComponent,
    ArticleViewComponent,
    AddArticleComponent,
    TagListComponent,
    LoadingComponent,
    ArticleCommentsListComponent,
    ArticleCommentComponent,
    ArticleAddCommentComponent,
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ArticlesRoutingModule,
    InToolbarModule,
    InTableModule,
    InPaginatorModule,
    InTagModule,
    InSelectModule,
    InCardModule,
    InInputModule,
    InButtonModule,
    InTextareaModule,
    MatSelectModule,
  ]
})
export class ArticlesModule { }
