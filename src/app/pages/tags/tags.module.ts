import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { TagsHeaderComponent } from './components/tags-header/tags-header.component';
import { InToolbarModule } from '@intabia/angular-ui';


@NgModule({
  declarations: [
    TagsComponent,
    TagsHeaderComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    InToolbarModule
  ]
})
export class TagsModule { }
