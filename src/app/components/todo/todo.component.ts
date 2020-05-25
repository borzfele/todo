import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo.models';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Store } from '@ngxs/store';
import { FinishTodo, UnfinishTodo } from '../../store/todo.actions';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: Todo;

  constructor(public modal: MatDialog, private store: Store) { }

  onDelete(): void {
    this.modal.open(ModalComponent, {data: this.todo.id});
  }

  onEdit(): void {
    this.modal.open(EditModalComponent, {data: this.todo});
  }

  onFinishClicked(event) {
    if(event.checked === true) {
      this.todo.finished = true;
      this.store.dispatch(new FinishTodo(this.todo.id));
    } else {
      this.todo.finished = false;
      this.store.dispatch(new UnfinishTodo(this.todo));
    }
  }

  ngOnInit() {
  }

}
