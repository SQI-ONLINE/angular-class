import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: String, ...args: unknown[]): unknown {
    // console.log(args);
    let type = args[0]
    if(type == 'u'){
      return value.toUpperCase();
    }else if(type == 'l'){
      return value.toLowerCase()
    }else if(type == 'm'){
      
    }else{
      return value
    }
  }


}
