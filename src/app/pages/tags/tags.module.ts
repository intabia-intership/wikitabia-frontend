import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagsRoutingModule } from 'src/app/pages/tags/tags-routing.module';
import { TagsComponent } from 'src/app/pages/tags/tags.component';
import { TagsHeaderComponent } from 'src/app/pages/tags/components/tags-header/tags-header.component';
import { AddTagComponent } from 'src/app/pages/tags/components/add-tag/add-tag.component'
import {
  InToolbarModule,
  InSelectModule,
  InInputModule,
  InButtonModule,
} from '@intabia/angular-ui';

@NgModule({
  declarations: [
    TagsComponent,
    TagsHeaderComponent,
    AddTagComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TagsRoutingModule,
    InToolbarModule,
    InInputModule,
    InSelectModule,
    InButtonModule,
  ]
})
export class TagsModule { }
