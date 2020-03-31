import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
}
