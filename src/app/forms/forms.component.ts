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
      lastName: [''],
      phoneNumber: [''],
      email: [''],
      password: [''],
    })

    this.profileForm.controls['phoneNumber'].setValue("070")

    // this.profileForm.setValue({phoneNumber: "08080", firstName: ""})

  }

  processForm(){
    if(this.profileForm.valid){

    }else{

    }
    console.log(this.profileForm.value)
    // console.log("THE FORM is", this.profileForm.valid)
  }
}

