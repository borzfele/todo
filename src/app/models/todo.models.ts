export interface TodoStateModel {
  todos: Todo[];
}

export interface Todo {
  id: number;
  todo: string;
  finished: boolean;
  priority: boolean;
}

export interface MenuItem {
  label: string;
  action: () => void;
}
