import { Injectable } from '@angular/core';
import { ITagOptions } from 'src/app/shared/models/article.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private _tags: string[] = [];
  private _tagsOptions: ITagOptions[] = [];
  private historyTags: string[] = [];

  set tags(tags: string[]) {
    this._tags = tags;
    this.historyTags = Array.from(tags);
  }

  get tags(): string[] {
    return this._tags;
  }

  set tagsOptions(tagsOptions: ITagOptions[]) {
    this._tagsOptions = tagsOptions;
  }

  get tagsOptions(): ITagOptions[] {
    return this._tagsOptions;
  }

  resetTags() {
    this.tags = this.historyTags;
  }
}
