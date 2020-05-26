import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { TodoState } from './store/todo.state';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.models';
import { TodoListOnInit } from './store/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-app';

  @Select(TodoState.priorityTodos)
  priorities$: Observable<Todo[]>;

  @Select(TodoState.commonTodos)
  commonTodos$: Observable<Todo[]>;

  ngOnInit(): void {
  }

  constructor(private store: Store) {

  }

}
