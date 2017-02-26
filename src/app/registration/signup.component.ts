import { Component, OnInit } from '@angular/core';

import { SignupFormComponent } from './forms/signup-form/signup-form.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [`.form-wrapper { padding: 25px 80px 70px; }`]
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
