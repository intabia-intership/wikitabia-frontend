import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ITagOptions, IDifficultyOptions } from 'src/app/shared/models/article.interfaces';
import { ListsHttpService } from 'src/app/shared/services/lists-http.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  tagsOptions: ITagOptions[] = [];
  difficultOptions: IDifficultyOptions[] = [];
  filterForm: FormGroup = new FormGroup({});
  addArticleForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    link: new FormControl(null, [Validators.required]),
    description: new FormControl(null, []),
    tags: new FormControl(null, []),
    difficulty: new FormControl(null, []),
  });

  constructor(
    private dialogRef: MatDialogRef<AddArticleComponent, undefined>,
    private listsHttp: ListsHttpService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getData() {
    this.getTags();
    this.getDifficultyList();
  }

  getTags() {
    this.sub.add(
      this.listsHttp.getTags()
        .subscribe((tags: ITagOptions[]) => {
          this.tagsOptions = tags;
        })
    );
  }

  getDifficultyList() {
    this.sub.add(
      this.listsHttp.getDifficultyList()
        .subscribe((difficultyList: IDifficultyOptions[]) => {
          this.difficultOptions = difficultyList;
        })
    );
  }

  addArticle() {
    if (this.addArticleForm.invalid) {
      return;
    }
    this.dialogRef.close(
      this.addArticleForm.getRawValue()
    );
  }

  onClose() {
    this.dialogRef.close();
  }
}
