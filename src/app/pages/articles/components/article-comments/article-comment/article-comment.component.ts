import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IComment, INewComment } from 'src/app/shared/models/comment.interfaces';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./article-comment.component.scss']
})
export class ArticleCommentComponent {
  @Output() deleteCommentEvent = new EventEmitter<string>();
  @Output() saveCommentEvent = new EventEmitter<INewComment>();

  loading = false;
  editMode = false;
  commentValue = new FormControl('');
  // IComment initialize
  commentInfo = {
    id: '',
    userName: '',
    publishDate: '',
    publishTime: '',
    value: '',
  };

  @Input()
  set comment(comment: IComment) {
    this.commentInfo = comment;
    this.commentValue.patchValue(comment.value);
  }

  constructor() { }

  private editComment() {
    this.editMode = true;
  }

  private deleteComment() {
    this.deleteCommentEvent.emit(this.commentInfo.id)
  }

  private saveEditedComment() {
    // TODO Добавить проверку на изменилось ли значение
    const data = {
      id: this.commentInfo.id,
      value: this.commentValue.value,
    }
    this.saveCommentEvent.emit(data);
    this.editMode = false;
  }

  private cancelEdit() {
    this.editMode = false;
  }
}
