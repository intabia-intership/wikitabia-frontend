import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './shared/guards/login.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { ERoutesPath } from './shared/models/routes';
import { LayoutGuard } from './shared/guards/layout.guard';

const routes: Routes = [
  {
    path: ERoutesPath.LOGIN,
    canActivateChild: [LoginGuard, LayoutGuard],
    loadChildren: () => import('./pages/login/login.module').then(
      (m) => m.LoginModule
    ),
  },
  {
    path: ERoutesPath.ARTICLES,
    canActivateChild: [AuthGuard, LayoutGuard],
    loadChildren: () => import('./pages/articles/articles.module').then(
      (m) => m.ArticlesModule
    ),
  },
  {
    path: ERoutesPath.TAGS,
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/tags/tags.module').then(
      (m) => m.TagsModule
    ),
  },
  {
    path: '**',
    redirectTo: ERoutesPath.LOGIN
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
