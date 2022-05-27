import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IArticle } from 'src/app/shared/models/article.interfaces';

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.scss']
})
export class ArticleViewComponent {
  @Input() currentArticle: IArticle | null = null;
  @Input() difficultyName = '';

  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  editHandler() {
    this.edit.emit();
  }

  deleteHandler() {
    this.delete.emit();
  }

  changeLikes(thumb: string) {
    if (!this.currentArticle) {
      return;
    }
    // TODO: заменить, когда будет готов бэк
    thumb === 'thumb_up' ? this.currentArticle.thumb_up++ : this.currentArticle.thumb_down++;
  }
}
