export interface TodoStateModel {
  todos: Todo[]
  pending: boolean
}

export interface Todo {
  todo: string;
  finished: boolean;
  priority: boolean;
}
