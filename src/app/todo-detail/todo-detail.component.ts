import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
  providers: [TodoComponent]
})

export class TodoDetailComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public todoComponent: TodoComponent) { }
  public todo_item;
  public todo_id;
  
  ngOnInit(): void {
    // this.todo_item = this.actRoute.snapshot.params._value.todo
    this.actRoute.paramMap.subscribe(param => {
      this.todo_id = param.get('todo')
      // console.log(this.todoComponent)
      // let todoArr = this.todoComponent.todoArr;
      // console.log(todoArr);
      let todoArr = JSON.parse(localStorage.getItem('todos'))
      console.log(todoArr)
      let ctodo = todoArr.filter(t => t.todo_id == this.todo_id);
      this.todo_item = ctodo[0]; 
      console.log(this.todo_item, "TODO ITEM")
    })
  }

}
