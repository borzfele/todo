import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { Store } from '@ngxs/store';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  todos: Todo[];

  columnsToDisplay = ["todo"];

  constructor(private store: Store, public modal: MatDialog) { }

  onDelete(todoId: number): void {
    this.modal.open(ModalComponent, {data: todoId});
  }

  ngOnInit() {
    console.log(this.todos);
  }

}
