import { Injectable } from '@angular/core';
import { ITagOptions } from 'src/app/shared/models/article.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TagsService {
  private Tags: string[] = [];
  private TagsOptions: ITagOptions[] = [];
  private historyTags: string[] = [];

  set tags(tags: string[]) {
    this.Tags = tags;
    this.historyTags = Array.from(tags);
  }

  get tags(): string[] {
    return this.Tags;
  }

  set tagsOptions(tagsOptions: ITagOptions[]) {
    this.TagsOptions = tagsOptions;
  }

  get tagsOptions(): ITagOptions[] {
    return this.TagsOptions;
  }

  resetTags() {
    this.tags = this.historyTags;
  }
}
