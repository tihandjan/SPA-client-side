import { Component, OnInit, Input} from '@angular/core';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() side: any;

  constructor(
    public authService: Angular2TokenService
  ) {}
  
  ngOnInit() {
  }

  signOut() {
    this.authService.signOut().subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
