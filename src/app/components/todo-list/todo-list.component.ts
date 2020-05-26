import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Store } from '@ngxs/store';

import { ModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { Todo } from '../../models/todo.models';
import { FinishTodo, UnfinishTodo } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input()
  set todos(todos: Todo[]) {
    if(todos) {
      const unfinished = todos
          .filter(todo => todo.finished === false)
          .sort((a, b) => {
            if ( a.todo.toLowerCase() < b.todo.toLowerCase() ){
              return -1;
            }
            if ( a.todo.toLowerCase() > b.todo.toLowerCase() ){
              return 1;
            }
            return 0;
          });
      const finished = todos
        .filter(todo => todo.finished === true)
        .sort((a, b) => {
          if ( a.todo < b.todo ){
            return -1;
          }
          if ( a.todo > b.todo ){
            return 1;
          }
          return 0;
        });
        this.localTodos = [...unfinished, ...finished];
    }
  }

  localTodos: Todo[];

  columnsToDisplay = ["todo", "finished", "Edit", "Delete"];

  constructor(private store: Store, public modal: MatDialog) { }

  onDelete(todoId: number): void {
    this.modal.open(ModalComponent, {data: todoId});
  }

  onEdit(todo): void {
    this.modal.open(EditModalComponent, {data: todo});
  }

  onFinishClicked(event, todo) {
    if(event.checked === true) {
      this.store.dispatch(new FinishTodo(todo.id));
    } else {
      todo.finished = false;
      this.store.dispatch(new UnfinishTodo(todo));
    }
  }
}
