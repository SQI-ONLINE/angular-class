import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodoPipe'
})
export class FilterTodoPipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(todos, searchText){
    if(!searchText) return todos;
    
    let st = searchText.toLowerCase();
    let newTodos = todos.filter(t => t.name.toLowerCase().includes(st) || t.time.toLowerCase().includes(st));
    return newTodos;
  }

}
