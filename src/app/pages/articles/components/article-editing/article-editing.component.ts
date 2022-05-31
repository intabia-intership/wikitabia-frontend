import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IArticle, IDifficultyOptions } from 'src/app/shared/models/article.interfaces';

@Component({
  selector: 'app-article-editing',
  templateUrl: './article-editing.component.html',
  styleUrls: ['./article-editing.component.scss']
})
export class ArticleEditingComponent implements OnChanges {
  @Input() difficultyOptions: IDifficultyOptions[] = [];
  @Input() currentArticle: IArticle | null = null;

  @Output() save = new EventEmitter<any>();

  articleForm: FormGroup;

  constructor() {
    this.articleForm = new FormGroup({
      article: new FormControl(''),
      link: new FormControl(''),
      difficulty: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnChanges() {
    if (this.currentArticle) {
      const { article, link, difficulty, description } = this.currentArticle;
      this.articleForm.patchValue({
          article,
          link,
          difficulty,
          description,
      })
    }
  }

  saveHandler(isSave: boolean) {
    const data = this.articleForm.getRawValue();
    isSave ? this.save.emit(data) : this.save.emit(null);
  }
}
