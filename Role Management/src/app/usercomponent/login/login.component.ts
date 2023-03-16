import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailAndPassword } from 'src/app/models/email-and-password';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailAndPass:EmailAndPassword
  constructor(){
    this.emailAndPass=new EmailAndPassword();
  }
  LoginUser(loginForm:NgForm){
    console.log(this.emailAndPass);
    
  }
}
