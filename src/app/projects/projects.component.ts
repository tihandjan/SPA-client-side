import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectsService } from './projects.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project;
  projects: Project[];
  errorMessage: string;
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void{
    this.projectsService.getProjects()
                        .subscribe(
                          response => {
                            this.project = response[0];
                            this.projects = response;
                          },
                          error => this.errorMessage = error);
  }

}
