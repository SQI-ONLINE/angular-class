import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  
  public todoArr = [];

  constructor(public http: HttpClient) {
    if(localStorage.getItem('todos')){
      this.todoArr = JSON.parse(localStorage.getItem('todos'))
    }else{
      localStorage.setItem('todos', JSON.stringify([]))
      this.todoArr = [];
    }
  }

  public httpOptions = {
    headers: new HttpHeaders({

    })
  }

  fetchTodos(){
    // let url = "http://localhost:8080/todo-backend";
    let data = {};
    // return this.http.post(`${url}/todos.php`, data)
    return this.http.get('http://localhost:8080/todo-backend/todos.php')
    .pipe(
      retry(2) // retry up to 2 times
    )
    // return this.http.get('todo-backend/todos.php')
    // .pipe(
    //   retry(2) // retry up to 2 times
    // )
  }

  setTodo(todo){
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization','token')
    return this.http.post('http://localhost:8080/todo-backend/setTodo.php',todo, this.httpOptions)
  }

  getTodos(){
    // return this.todoArr;
    return of(this.todoArr);
  }

  addTodo(todo){
    let cTime = new Date();
    let todo_id = this.todoArr.length+1;
    this.todoArr.push({todo_id, name: todo, time: cTime.toUTCString()})
    localStorage.setItem('todos', JSON.stringify(this.todoArr))
  }

  removeTodo(index){
    this.todoArr.splice(index,1)
    localStorage.setItem('todos', JSON.stringify(this.todoArr))
  }


}
