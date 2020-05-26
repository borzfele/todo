import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngxs/store';
import { SubmitTodo } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  constructor(private store: Store) { }

  todoForm: FormGroup = new FormGroup({
    todo: new FormControl(""),
    finished: new FormControl(false),
    priority: new FormControl(false)
  });

  onSubmit() {
    this.store.dispatch(new SubmitTodo(this.todoForm.value));
    this.todoForm.reset();
  }

}
