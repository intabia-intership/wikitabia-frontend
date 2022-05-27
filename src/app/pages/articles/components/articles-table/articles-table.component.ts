import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InPageInfo, InNavigateTo, InSort } from '@intabia/angular-ui';
import { IArticle, IDifficultyOptions, ITagOptions } from 'src/app/shared/models/article.interfaces';
import { EArticleTable } from 'src/app/shared/models/table.enums';
import { IConfigTable } from 'src/app/shared/models/table.interfaces';

@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.scss']
})
export class ArticlesTableComponent {
  @Input() articles: IArticle[] = [];
  @Input() pageInfo: InPageInfo | null = null;
  @Input() tagsOptions: ITagOptions[] = [];
  @Input() difficultyOptions: IDifficultyOptions[] = [];

  @Output() navigateChange = new EventEmitter<InNavigateTo>();
  @Output() sortChange = new EventEmitter<InSort>();

  articleTable = EArticleTable;
  configSort: InSort[] = [
    {
      name: 'article',
      direction: ''
    },
    {
      name: 'difficulty',
      direction: ''
    },
    {
      name: 'thumb_up',
      direction: ''
    },
    {
      name: 'thumb_down',
      direction: ''
    }
  ];
  configTable: IConfigTable[] = [
    {
      cell: 'article',
      name: 'Название',
    },
    {
      cell: 'link',
      name: 'Ссылка',
    },
    {
      cell: 'tags',
      name: 'Теги',
    },
    {
      cell: 'difficulty',
      name: 'Сложность',
    },
    {
      cell: 'thumb_up',
      name: 'Нравится',
    },
    {
      cell: 'thumb_down',
      name: 'Не очень',
    },
  ];

  tableButtonHandler(id: string, action: string) {
    const targetArticle = this.articles.find(article => article.id === id);
    if (targetArticle) {
      action === 'thumb_up' ? targetArticle.thumb_up++ : targetArticle.thumb_down++;
    }
  }

  getCellSort = (name: string): InSort | undefined => (
    this.configSort.find((item: InSort) => item.name === name)
  )

  changeSort($event: InSort) {
    const eventName = $event.name as keyof IArticle;
    this.configSort = this.configSort.map((item: InSort) => (
      item.name === $event.name ? $event : { ...item, direction: '' }
    ));
    this.articles = this.articles.sort((a, b) => {
      const keyA = a[eventName] ?? '';
      const keyB = b[eventName] ?? '';
      if (keyA > keyB) {
        return $event.direction === 'desc' ? -1 : 1;
      }
      if (keyA < keyB) {
        return $event.direction === 'desc' ? 1 : -1;
      }
      return 0;
    });
    this.sortChange.emit($event);
  }

  getDifficulty(id: string): string {
    return this.difficultyOptions.find((item) => item.id === id)?.viewValue ?? '';
  }

  getTagName(id: string): string {
    return this.tagsOptions.find((item) => item.id === id)?.viewValue ?? '';
  }

  getTagColor(id: string): string {
    return this.tagsOptions.find((item) => item.id === id)?.color ?? 'default';
  }
}
