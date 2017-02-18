import { Component, OnInit } from '@angular/core';

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

}
