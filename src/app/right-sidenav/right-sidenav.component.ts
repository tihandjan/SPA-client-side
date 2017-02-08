import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Project } from '../projects/project';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css']
})
export class RightSidenavComponent implements OnInit {
  projects: Project[];
  errorMessage: string;
  constructor(private router: Router, private projectsService: ProjectsService) { }
  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getDocuments())
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

  getDocuments() {
    this.projectsService.getProjects()
                        .subscribe(
                          response => this.projects = response,
                          error => this.errorMessage = error
                        )
  }

}
