import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-add-comment',
  templateUrl: './article-add-comment.component.html',
  styleUrls: ['./article-add-comment.component.scss']
})
export class ArticleAddCommentComponent {
  @Output() addCommentEvent = new EventEmitter<string>();
  comment = new FormControl('', [Validators.required]);

  constructor() { }

  addComment() {
    this.addCommentEvent.emit(this.comment.value)
  }
}
