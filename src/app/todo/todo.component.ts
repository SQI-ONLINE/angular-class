import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  constructor(public router: Router, public todoService: TodoService) { }

  public todo = "";
  public todoArr: any = [];

  ngOnInit(): void {
    // this.todoArr =  this.todoService.todoArr;
    this.todoArr = this.todoService.getTodos()
    this.todoService.getTodos().subscribe(data => {
      this.todoArr = data;
    })


    this.todoService.fetchTodos().subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error)
    })

    //fetching student list . subscribe( other operations )
    //select one from the list
    //edit the selected item

  }


  addTodo(){

    this.todoService.setTodo(this.todo).subscribe(data => {
      console.log(data);
    })
    this.todoService.addTodo(this.todo);
    // let cTime = new Date();
    // let todo_id = this.todoArr.length+1;
    // this.todoArr.push({todo_id, name: this.todo, time: cTime.toUTCString()})
    // localStorage.setItem('todos', JSON.stringify(this.todoArr))
    this.todo = "";
  }
  
  removeTodo(index){
    // this.todoArr.splice(index,1)
    // localStorage.setItem('todos', JSON.stringify(this.todoArr))
    this.todoService.removeTodo(index);

  }

  viewTodo(todo_item){
    this.router.navigate(['/todo-detail/'+todo_item])
  }
}
