import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


const routes: Routes = [
  { path: '', component: TodoFormComponent},
  { path: 'todo/:todoId', component: TodoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
