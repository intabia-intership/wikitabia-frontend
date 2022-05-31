import { Injectable } from '@angular/core';
import { ITagOptions } from 'src/app/shared/models/article.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private _tags: string[] = [];
  private _historyTags: string[] = [];
  private _tagsOptions: ITagOptions[] = [];

  get tags(): string[] {
    return this._tags;
  }

  get tagsOptions(): ITagOptions[] {
    return this._tagsOptions;
  }

  set tags(tags: string[]) {
    this._tags = tags;
    this._historyTags = Array.from(tags);
  }

  set tagsOptions(tagsOptions: ITagOptions[]) {
    this._tagsOptions = tagsOptions;
  }

  resetTags() {
    this.tags = this._historyTags;
  }
}
