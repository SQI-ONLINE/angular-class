import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoGuard } from './todo.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'todo', component: TodoComponent},
  {path: 'home', component: HomeComponent},
  {path: 'todo-detail/:todo', component: TodoDetailComponent, canActivate: [TodoGuard]},
  {path: 'app', children: [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'todo', component: TodoComponent}
  ]},
  {path: '**', component: NotFoundComponent}
];
// favour.com/todo
// favour.com/home
// favour.com
// favour.com/app
// favour.com/app/todo
@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
