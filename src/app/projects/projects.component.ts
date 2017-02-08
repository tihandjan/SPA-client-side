import { Component, OnInit } from '@angular/core';

import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project = {
    title: 'nafootball',
    summary: 'Cinemaplex provides information about movies showing in Kenyan Cinemas',
    technology: 'Rails 5, Angular 2',
    description: 'Cinemaplex is a simple chrome extensions that offers information about various movies that are showing in Kenyan cinemas. It gets its information from the cinemaplex API I wrote some time back.',
    image: 'http://josephndungu.com/assets/projects/9/large/a5633b3bf59be0d1de06db949668dd1f68a880d8.png?1397803526',
    site_url: 'http://nafootball.com',
    realise: '2016 январь',
    name: 'nafootball'
  }
  constructor() { }

  ngOnInit() {
  }

}
