import { Injectable } from '@angular/core';

import {
  State,
  Action,
  StateContext,
  Selector } from '@ngxs/store';

import { TodoStateModel, Todo } from '../models/todo.models';
import { TodoService } from '../services/todo.service';
import {
  SubmitTodo,
  TodoListOnInit,
  GetTodosSuccess,
  GetTodos,
  DeleteTodo,
  SubmitTodoSuccess,
  DeleteTodoSuccess,
  FinishTodo,
  FinishTodoSuccess,
  UnfinishTodo,
  UnfinishTodoSuccess,
  UpdateTodo,
  UpdateTodoSuccess
} from './todo.actions';

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: []
  }
})
@Injectable()
export class TodoState {

  @Selector()
  static commonTodos(state: TodoStateModel): Todo[] {
    return state.todos
        .filter(todo => todo.priority === false);
  }

  @Selector()
  static priorityTodos(state: TodoStateModel): Todo[] {
    return state.todos
        .filter(todo => todo.priority === true);
  }

  @Action([TodoListOnInit, GetTodos])
  getTodos(ctx: StateContext<TodoStateModel>): void {
    this.todoService.getTodos().subscribe((todos) => {
      ctx.dispatch(new GetTodosSuccess(todos));
    });
  }

  @Action(GetTodosSuccess)
  getTodosSuccess(ctx: StateContext<TodoStateModel>, action: GetTodosSuccess): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      todos: action.todos
    });
  }

  @Action(SubmitTodo)
  submitTodo(ctx: StateContext<TodoStateModel>, action: SubmitTodo): void {
    this.todoService.postTodo(action.todo).subscribe(() => {
      ctx.dispatch(new SubmitTodoSuccess());
    });
  }

  @Action([SubmitTodoSuccess, DeleteTodoSuccess, FinishTodoSuccess, UnfinishTodoSuccess, UpdateTodoSuccess])
  modificationSuccess(ctx: StateContext<TodoStateModel>): void {
    ctx.dispatch(new GetTodos());
  }

  @Action(DeleteTodo)
  deleteTodo(ctx: StateContext<TodoStateModel>, action: DeleteTodo): void {
    this.todoService.deleteTodo(action.todoId).subscribe(() => {
      ctx.dispatch(new DeleteTodoSuccess());
    });
  }

  @Action(FinishTodo)
  finishTodo(ctx: StateContext<TodoStateModel>, action: FinishTodo): void {
    this.todoService.finishTodo(action.todoId).subscribe(() => {
      ctx.dispatch(new FinishTodoSuccess());
    });
  }

  @Action(UnfinishTodo)
  unfinishTodo(ctx: StateContext<TodoStateModel>, action: UnfinishTodo): void {
    this.todoService.updateTodo(action.todo).subscribe(() => {
      ctx.dispatch(new UnfinishTodoSuccess());
    })
  }

  @Action(UpdateTodo)
  updateTodo(ctx: StateContext<TodoStateModel>, action: UpdateTodo): void {
    this.todoService.updateTodo(action.todo).subscribe(() => {
      ctx.dispatch(new UpdateTodoSuccess());
    })
  }

  constructor (private todoService: TodoService) {}

}
