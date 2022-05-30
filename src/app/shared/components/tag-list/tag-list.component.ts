import { Component, Input } from '@angular/core';
import { ITagOptions } from 'src/app/shared/models/article.interfaces';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent {
  @Input() tags: string[] = [];
  @Input() tagsOptions: ITagOptions[] = [];
  @Input() isEditing = false;

  get availableTags(): ITagOptions[] {
    return this.tagsOptions.filter((tag) => this.tags.includes(tag.id) || !tag.id ? false : tag);
  }

  getTagName(id: string): string {
    return this.tagsOptions.find((item) => item.id === id)?.viewValue ?? '';
  }

  getTagColor(id: string): string {
    return this.tagsOptions.find((item) => item.id === id)?.color ?? 'default';
  }

  addTag(tag: string) {
    this.tags.push(tag);
  }

  removeTag(tag: string) {
    if (!this.isEditing) {
      return;
    }
    const idx = this.tags.indexOf(tag);
    this.tags.splice(idx, 1);
  }

}
