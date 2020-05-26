import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from '../../store/todo.state';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.models';
import { TodoListOnInit } from '../../store/todo.actions';

@Component({
  selector: 'app-todo-list-page',
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss']
})
export class TodoListPageComponent implements OnInit {

  @Select(TodoState.priorityTodos)
  priorities$: Observable<Todo[]>;

  @Select(TodoState.commonTodos)
  commonTodos$: Observable<Todo[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new TodoListOnInit());
  }

}
