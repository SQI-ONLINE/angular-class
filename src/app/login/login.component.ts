import { Component, OnInit } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./new_style.css'],
  providers: [SignUpComponent]
})

export class LoginComponent implements OnInit {

  constructor(public signUp: SignUpComponent) { }

  public name = "Favour"
  ngOnInit(): void {
    
  }



  handleForm(e){
    e.preventDefault()
    console.log("Submiting Form")
  }
}
