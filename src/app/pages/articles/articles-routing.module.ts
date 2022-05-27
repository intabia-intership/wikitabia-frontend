import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { LayoutGuard } from 'src/app/shared/guards/layout.guard';
import { ArticlesHeaderComponent } from './components/articles-header/articles-header.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LayoutGuard],
    pathMatch: 'full',
    component: ArticleListComponent,
    data: {
      header: ArticlesHeaderComponent,
    },
  },
  {
    path: ':id',
    canActivate: [LayoutGuard],
    component: ArticleComponent,
    data: {
      header: ArticlesHeaderComponent,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
