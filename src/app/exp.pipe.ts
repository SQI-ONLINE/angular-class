import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let factor = args[0];
    if(!factor){
      if(!value){
        return 0;
      }
      return value;
    }
    
    return Math.pow(value,factor);
  }

}
