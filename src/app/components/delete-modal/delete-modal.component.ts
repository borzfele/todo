import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Store } from '@ngxs/store';

import { DeleteTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public todoId: number,
    private store: Store
    ) {}

  onDelete(): void {
    this.store.dispatch(new DeleteTodo(this.todoId));
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
