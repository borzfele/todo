import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Store } from '@ngxs/store';
import { FinishTodo } from '../../store/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(public modal: MatDialog, private store: Store) { }

  onDelete(todoId: number): void {
    this.modal.open(ModalComponent, {data: todoId});
  }

  onFinish(event) {
    if(event.checked === true) {
      console.log(this.todo.id);
      this.store.dispatch(new FinishTodo(this.todo.id));
    }
  }

  ngOnInit() {
  }

}
