import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INewTag } from 'src/app/shared/models/tags.interfaces';

@Injectable({
  providedIn: 'root'
})
export class TagsHttpService {
  constructor(private http: HttpClient) { }

  addTag(newTag: INewTag) {
    // TODO: реализовать, когда будет бэк
  }
}
