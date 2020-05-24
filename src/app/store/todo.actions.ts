import { Todo } from '../models/todo.models';

export class SubmitTodo {
  static readonly type = '[TodoForm] SubmitTodo';
  constructor(public todo: Todo) {}
}

export class SubmitTodoSuccess {
  static readonly type = '[Store] SubmitTodoSuccess';
}

export class SubmitTodoError {
  static readonly type = '[Store] SubmitTodoError';
}

export class TodoListOnInit {
  static readonly type = '[TodoList] TodoListOnInit';
}

export class GetTodos {
  static readonly type = '[Store] GetTodos';
}

export class GetTodosSuccess {
  static readonly type = '[TodoState] GetTodosSuccess';

  constructor(public todos: Todo[]) {}
}

export class DeleteTodo {
  static readonly type = '[TodoList] DeleteTodo';

  constructor(public todoId: number) {}
}

export class DeleteTodoSuccess {
  static readonly type = '[Store] DeleteTodoSuccess';
}

export class FinishTodo {
  static readonly type = '[TodoComponent] FinishTodo';

  constructor(public todoId: number) {}
}

export class FinishTodoSuccess {
  static readonly type = '[Store] FinishTodoSuccess';
}
