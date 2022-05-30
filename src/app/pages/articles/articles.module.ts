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
