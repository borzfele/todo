import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { Store } from '@ngxs/store';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../delete-modal/delete-modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { FinishTodo, UnfinishTodo } from 'src/app/store/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

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

  ngOnInit() {
    console.log(this.todos);
  }

}
