import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IColorOptions } from 'src/app/shared/models/tags.interfaces';
import { ListsHttpService } from 'src/app/shared/services/lists-http.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();

  colorOptions: IColorOptions[] = [];
  addTagForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    color: new FormControl(null, [Validators.required]),
  });

  constructor(
    private dialogRef: MatDialogRef<AddTagComponent, undefined>,
    private listsHttp: ListsHttpService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getData() {
    this.getColorList();
  }

  getColorList() {
    this.sub.add(
      this.listsHttp.getColorList()
        .subscribe((colorList: IColorOptions[]) => {
          this.colorOptions = colorList;
        })
    );
  }

  addTag() {
    if (this.addTagForm.invalid) {
      return;
    }
    this.dialogRef.close(
      this.addTagForm.getRawValue()
    );
  }

  onClose() {
    this.dialogRef.close();
  }
}
