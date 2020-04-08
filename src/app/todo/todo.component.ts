import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(public router: Router) { }

  public todo = "";
  public todoArr: any = [];
  ngOnInit(): void {
    if(localStorage.getItem('todos')){
      this.todoArr = JSON.parse(localStorage.getItem('todos'))
    }else{
      localStorage.setItem('todos', JSON.stringify([]))
      this.todoArr = [];
    }
  }

  addTodo(){
    let cTime = new Date();
    let todo_id = this.todoArr.length+1;
    this.todoArr.push({todo_id, name: this.todo, time: cTime.toUTCString()})
    localStorage.setItem('todos', JSON.stringify(this.todoArr))
    this.todo = "";
  }
  
  removeTodo(index){
    this.todoArr.splice(index,1)
    localStorage.setItem('todos', JSON.stringify(this.todoArr))
  }

  viewTodo(todo_item){
    this.router.navigate(['/todo-detail/'+todo_item])
  }
}
