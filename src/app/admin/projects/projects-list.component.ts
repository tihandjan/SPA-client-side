import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/project';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['../articles/articles-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  projects: Array<Project>;
  errorMessages: string;
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projectsService.getProjects()
          .subscribe(
            response => this.projects = response,
            error => this.errorMessages = error
          )
  }

  deleteProject(project) {
    this.projectsService.deleteProject(project.id)
          .subscribe(
            data => { return true },
            error => Observable.throw(error),
            () => this.deleteProjectFromArray(project)
          );
  }

  deleteProjectFromArray(project) {
    let index = this.projects.indexOf(project);
    this.projects.splice(index, 1);
  }

}
