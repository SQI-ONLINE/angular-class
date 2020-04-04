import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  public todo = "";
  public todoArr = [];
  ngOnInit(): void {
    
  }

  addTodo(){
    this.todoArr.push(this.todo)
    this.todo = "";
    console.log(this.todoArr);
  }

  removeTodo(index){
    this.todoArr.splice(index,1)
  }

}
