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

  saveHandler(isSave: boolean) {
    const data = this.articleForm.getRawValue();
    data.tags = this.tags;
    isSave ? this.save.emit(data) : this.save.emit(null);
  }
}
