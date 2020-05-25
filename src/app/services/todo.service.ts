import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodos(): Observable<any> {
    return this.http.get('https://milankiszely-todo-test-api.herokuapp.com/todo');
  }

  postTodo(todo: Todo): Observable<any> {
    return this.http.post('https://milankiszely-todo-test-api.herokuapp.com/todo', todo);
  }

  deleteTodo(todoId: number): Observable<any> {
    return this.http.delete('https://milankiszely-todo-test-api.herokuapp.com/todo/' + todoId);
  }

  finishTodo(todoId: number): Observable<any> {
    return this.http.put('https://milankiszely-todo-test-api.herokuapp.com/todo/finish/' + todoId, {});
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put('https://milankiszely-todo-test-api.herokuapp.com/todo/' + todo.id, todo);
  }

  constructor(private http: HttpClient) { }
}
