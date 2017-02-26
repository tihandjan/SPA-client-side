import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  @Output() onFormResult = new EventEmitter<any>();
  signInObject: any = {
    email: '',
    password: ''
  }

  constructor(
    private authService: Angular2TokenService
  ) { }

  ngOnInit() {
  }

  signIn(obj) {
    this.authService.signIn(obj).subscribe(
      response => {
        if(response.status == 200) {
          this.onFormResult.emit({ SignedIn: true, response })
        }
      },
      error => {
        console.log(error.json());
        this.onFormResult.emit({ SignedIn: false, error })
      }
    )
  } 

}
