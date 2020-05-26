import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListPageComponent } from './components/todo-list-page/todo-list-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'add-todo', component: TodoFormComponent },
  { path: 'todo-list', component: TodoListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
