import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticle, IDifficultyOptions } from 'src/app/shared/models/article.interfaces';

@Component({
  selector: 'app-article-editing',
  templateUrl: './article-editing.component.html',
  styleUrls: ['./article-editing.component.scss']
})
export class ArticleEditingComponent {
  @Input() difficultyOptions: IDifficultyOptions[] = [];
  @Input()
  set currentArticle(currentArticle: IArticle | null) {
    if (currentArticle) {
      const { article, link, difficulty, description } = currentArticle;
      this.articleForm.patchValue({
          article,
          link,
          difficulty,
          description,
      });
    }
  }
  get currentArticle(): IArticle | null {
    return this.article;
  }

  @Output() save = new EventEmitter<any>();

  articleForm: FormGroup;
  article: IArticle | null = null;
  constructor() {
    this.articleForm = new FormGroup({
      article: new FormControl(''),
      link: new FormControl(''),
      difficulty: new FormControl(''),
      description: new FormControl(''),
    });
  }

  saveHandler(isSave: boolean) {
    const data = this.articleForm.getRawValue();
    isSave ? this.save.emit(data) : this.save.emit(null);
  }
}
