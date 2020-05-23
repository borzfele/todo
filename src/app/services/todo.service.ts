import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  postTodo(todo: Todo): Observable<any> {
    return this.http.post('https://milankiszely-todo-test-api.herokuapp.com/todo', todo);
  }

  constructor(private http: HttpClient) { }
}
