import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css']
})
export class RightSidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLinkClick($event: any) {
    if($event.index === 0) {
      this.router.navigate(['projects']);
    } else if ($event.index === 1) {
      this.router.navigate(['articles']);
    } else if ($event.index === 2) {
      this.router.navigate(['contacts']);
    }
  }

}
