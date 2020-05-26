import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngxs/store';

import { Todo } from '../../models/todo.models';
import { UpdateTodo } from '../../store/todo.actions';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {

  editTodoForm: FormGroup = new FormGroup({
    todo: new FormControl(this.todo.todo),
    finished: new FormControl(this.todo.finished),
    priority: new FormControl(this.todo.priority)
  });

  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo,
    private store: Store
    ) { }

  onSubmit(): void {
    this.todo.todo = this.editTodoForm.controls['todo'].value;
    this.todo.finished = this.editTodoForm.controls['finished'].value;
    this.todo.priority = this.editTodoForm.controls['priority'].value;
    this.store.dispatch(new UpdateTodo(this.todo));
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
