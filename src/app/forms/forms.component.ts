import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {

  constructor(public fb: FormBuilder) { }

  // public firstName = new FormControl('');
  // public lastName = new FormControl('');
  // public phoneNumber = new FormControl('');
  // public email = new FormControl('');
  // public password = new FormControl('');

  // public name = new FormData()

  public profileForm = new FormGroup({});
  public name;
  public fName;
  public lName;
  public pNumber;
  public email;
  public password;
  public gender;
  ngOnInit(): void {
    // this.profileForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    //   phoneNumber: new FormControl(''),
    //   email: new FormControl(''),
    //   password: new FormControl(''),
    // })

  this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, this.validateEmail]],
      password: ['', Validators.required],
      gender: ['male'],
    })

    // this.profileForm.controls['phoneNumber'].setValue("070")

    // this.profileForm.setValue({phoneNumber: "08080", firstName: ""})

  }

  validateEmail(control: FormControl){
    let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    // console.log("Checking Email validity");
    // console.log(c.value, "Email value")

    if(control.value && EMAIL_REGEXP.test(control.value)){
      return null
    }else{
      return {'emailInvalid': true}
    }
  }

  // validateEmail(c: FormControl) {
  //   let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  //   return EMAIL_REGEXP.test(c.value) ? null : {
  //     validateEmail: {
  //       valid: false
  //     }
  //   };
  // }

  processForm(){
    if(this.profileForm.valid){

    }else{

    }
    console.log(this.profileForm.value)
    // console.log("THE FORM is", this.profileForm.valid)
  }

  processTemplateForm(){
    let profile = {firstName: this.fName, lastName: this.lName, phoneNumber: this.pNumber, emai: this.email, password: this.password, gender: this.gender}
    console.log(profile);
  }

  checkEmail(){
  
  }
}

