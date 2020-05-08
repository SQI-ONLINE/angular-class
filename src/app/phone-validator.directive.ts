import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneValidatorDirective,
    multi: true
  }]
})

export class PhoneValidatorDirective implements Validator {

  validate(c: AbstractControl): {[key: string]: any} | null{
    if(c.value.length < 11){
      return {'phoneNumberInvalid: true': true}
    }
    return null
  }
  constructor() { }

}
