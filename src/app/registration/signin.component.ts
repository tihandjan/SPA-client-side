import { Component, OnInit } from '@angular/core';

import { SigninFormComponent } from './forms/signin-form/signin-form.component';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: [`.form-wrapper { padding: 25px 80px 70px; }`]
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
