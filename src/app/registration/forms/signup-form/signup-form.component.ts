import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signUpObject: any = {
    email: '',
    password: '', 
    passwordConfirmation: ''
  }
  constructor(
    private authService: Angular2TokenService
  ) { }

  ngOnInit() {
  }

  signUp(obj) {
    this.authService.registerAccount(obj).subscribe(
      response => {
        if (response.status == 200) {
          console.log(response.json());
        }
      },
      error => {
        console.log(error.json());
      }
    )
  }

}
