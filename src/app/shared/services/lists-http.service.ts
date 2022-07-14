import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsHttpService {
  constructor(private http: HttpClient) { }

  getTags() {
    return of([
      {
        id: '',
        viewValue: 'Все теги',
        color: 'default',
      },
      {
        id: '1',
        viewValue: 'default',
        color: 'default',
      },
      {
        id: '2',
        viewValue: 'success',
        color: 'success',
      },
      {
        id: '3',
        viewValue: 'danger',
        color: 'danger',
      },
      {
        id: '4',
        viewValue: 'warning',
        color: 'warning',
      },
    ]);
  }

  getDifficultyList() {
    return of([
      {
        id: '',
        viewValue: 'Любой уровень'
      },
      {
        id: '1',
        viewValue: 'Для новичка'
      },
      {
        id: '2',
        viewValue: 'Нечто среднее'
      },
      {
        id: '3',
        viewValue: 'Очень сложно'
      },
    ]);
  }

  getColorList() {
    return of([
      {
        id: '1',
        viewValue: 'default'
      },
      {
        id: '2',
        viewValue: 'success'
      },
      {
        id: '3',
        viewValue: 'danger'
      },
      {
        id: '4',
        viewValue: 'warning'
      },
    ]);
  }
}

