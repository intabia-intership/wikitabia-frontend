import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutGuard } from 'src/app/shared/guards/layout.guard';
import { TagsHeaderComponent } from './components/tags-header/tags-header.component';
import { TagsComponent } from './tags.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LayoutGuard],
    pathMatch: 'full',
    component: TagsComponent,
    data: {
      header: TagsHeaderComponent,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
