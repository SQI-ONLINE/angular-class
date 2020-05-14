import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})

export class FormValidateComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public fName = '';
  public lName = '';
  public email = '';
  public phone = '';
  public password = '';

  // public fName = new FormControl();
  // public lName = new FormControl();
  // public email = new FormControl();
  // public phone = new FormControl();
  // public password = new FormControl();

  // public profileForm = new FormGroup({
  //   fName: new FormControl(),
  //   lName: new FormControl(),
  //   email: new FormControl(),
  //   phone: new FormControl(),
  //   password: new FormControl()
  // })

  public profileForm = this.fb.group({
    fName: ['', [Validators.required]],
    lName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email, this.validateWorkMail]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    password: ['', [Validators.required]]
  })

  validateWorkMail(control: FormControl){
    let email = control.value;
    if(email.includes('gmail') || email.includes('yahoo')){
      return {workMailInvalid: true};
    }else{
      return null;
    }
  }
  
  ngOnInit(): void {
    // let details = {fName: "Joseph", lName: "Joshua", email: "jj@yahoo.com", phone: "", password: ""}
    // this.profileForm.setValue(details)
    // this.profileForm.controls['fName'].setValue("Favour");
    // this.profileForm.controls['lName'].setValue("Afolabi");
    // this.profileForm.setValue({fName: "Favour", lName: "Afolabi", email: "", phone: "", password: ""})
  }

  submitForm(){
    // this.profileForm.get('fName')
    if(this.profileForm.valid){
      console.log("Valid Form :)")
    }else{
      console.log("Invalid Form (:")
    }
    // let result = this.profileForm.value;
    // console.log(result)
    // console.log(this.fName)
  }

  editDetails(){
    let details = {fName: "Joseph", lName: "Joshua", email: "jj@yahoo.com", phone: "", password: ""}
    this.profileForm.setValue(details)
    // this.user.editDetails()
  }
}
