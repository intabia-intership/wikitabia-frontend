import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IModalData } from 'src/app/shared/models/modal.interfaces';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.scss']
})
export class WarningComponent {
  header: string;
  content: string;
  
  constructor(
    private dialogRef: MatDialogRef<WarningComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: IModalData,
  ) {
    this.header = this.data?.header ?? 'Предупреждение';
    this.content = this.data?.content ?? 'Вы уверены?';
  }

  onReject() {
    this.dialogRef.close(false);
  }

  onAccept() {
    this.dialogRef.close(true);
  }
}
