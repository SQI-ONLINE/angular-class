import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  
  public todoArr = [];

  constructor() {
    if(localStorage.getItem('todos')){
      this.todoArr = JSON.parse(localStorage.getItem('todos'))
    }else{
      localStorage.setItem('todos', JSON.stringify([]))
      this.todoArr = [];
    }
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
