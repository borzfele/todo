import { Todo } from '../models/todo.models';

export class SubmitTodo {
  static readonly type = '[TodoForm] SubmitTodo';
  constructor(public payload: Todo) {}
}

export class SubmitTodoSuccess {
  static readonly type = '[Store] SubmitTodoSuccess';
}

export class SubmitTodoError {
  static readonly type = '[Store] SubmitTodoError';
}
