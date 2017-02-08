import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Project } from '../projects/project';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css']
})
export class RightSidenavComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'nafootabell',
      summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      technology: 'Rails, Angular 2',
      image: 'assets/images/guys-glasses.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      site_url: 'http://nafootball.com',
      realise: '2016 январь',
      name: 'nafootball'
    },
    {
      title: 'nafootabell',
      summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      technology: 'Rails, Angular 2',
      image: 'assets/images/guys-glasses.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      site_url: 'http://nafootball.com',
      realise: '2016 январь',
      name: 'nafootball'
    },
    {
      title: 'nafootabell',
      summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      technology: 'Rails, Angular 2',
      image: 'assets/images/guys-glasses.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      site_url: 'http://nafootball.com',
      realise: '2016 январь',
      name: 'nafootball'
    },
    {
      title: 'nafootabell',
      summary: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      technology: 'Rails, Angular 2',
      image: 'assets/images/guys-glasses.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
      site_url: 'http://nafootball.com',
      realise: '2016 январь',
      name: 'nafootball'
    }  
  ]
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

  someClick() {
    console.log('clicked');
  }

}
