import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(todos: any[], searchText: string){

    if(!searchText){
      return todos;
    }
    let st = searchText.toLowerCase();
    let result = todos.filter(t => t.name.toLowerCase().includes(st) || t.time.toLowerCase().includes(st));

    // console.log(result)
    return result;
  } 

}
