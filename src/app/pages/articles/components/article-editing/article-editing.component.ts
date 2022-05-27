import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDifficultyOptions, ITagOptions } from 'src/app/shared/models/article.interfaces';

@Component({
  selector: 'app-article-editing',
  templateUrl: './article-editing.component.html',
  styleUrls: ['./article-editing.component.scss']
})
export class ArticleEditingComponent {
  @Input() articleForm: FormGroup = new FormGroup({});
  @Input() difficultyOptions: IDifficultyOptions[] = [];
  @Input() tags: string[] = [];
  @Input() tagsOptions: ITagOptions[] = [];

  @Output() save = new EventEmitter<any>();

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
    const idx = this.tags.indexOf(tag);
    this.tags.splice(idx, 1);
  }

  saveHandler(isSave: boolean) {
    const data = this.articleForm.getRawValue();
    data.tags = this.tags;
    isSave ? this.save.emit(data) : this.save.emit(null);
  }
}
