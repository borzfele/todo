import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { DeleteTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public todoId: number, private store: Store) {}

  onDelete(): void {
    this.store.dispatch(new DeleteTodo(this.todoId));
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
