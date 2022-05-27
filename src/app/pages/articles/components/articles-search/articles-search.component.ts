import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ArticlesFilterModel } from 'src/app/shared/models/articles.classes';
import { IDifficultyOptions, IFilter, ITagOptions } from 'src/app/shared/models/article.interfaces';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.scss']
})
export class ArticlesSearchComponent implements OnDestroy {
  private sub: Subscription = new Subscription();

  @Input() tagsFilterOptions: ITagOptions[] = [];
  @Input() difficultyFilterOptions: IDifficultyOptions[] = [];

  @Output() filterChange = new EventEmitter<IFilter>();

  filterForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
  ) {
    this.buildForm();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  buildForm({title, tags, difficulty} = new ArticlesFilterModel()) {
    this.filterForm = this.fb.group({title, tags, difficulty});
    this.formChanges();
  }

  resetFilter() {
    this.filterForm.patchValue(new ArticlesFilterModel());
  }

  formChanges() {
    this.sub.add(
      this.filterForm.valueChanges.subscribe((filter: IFilter) => {
        this.filterChange.emit(filter);
      })
    );
  }
}
