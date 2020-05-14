import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validators, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appWorkMailValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: WorkMailValidatorDirective, multi: true}]
})
export class WorkMailValidatorDirective extends Validators {

  validate(control: AbstractControl): {[key: string]: boolean} | null{
    let email = control.value;
    if(email &&  (email.includes('gmail') || email.includes('yahoo'))){
      return {workMailInvalid: true};
    }else{
      return null;
    }
  }
  // constructor() { }

}
