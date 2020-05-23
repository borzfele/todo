import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { TodoStateModel } from '../models/todo.models';
import { SubmitTodo } from './todo.actions';
import { TodoService } from '../services/todo.service';

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
    pending: false
  }
})
@Injectable()
export class TodoState {

  @Action(SubmitTodo)
  submitTodo(ctx: StateContext<TodoStateModel>, action: SubmitTodo): void {
    this.todoService.postTodo(action.payload).subscribe(console.log);
  }

  constructor (private todoService: TodoService) {}

}
