export interface TodoStateModel {
  todos: Todo[];
  pending: boolean;
  isModalOpen: boolean;
}

export interface Todo {
  id: number;
  todo: string;
  finished: boolean;
  priority: boolean;
}
