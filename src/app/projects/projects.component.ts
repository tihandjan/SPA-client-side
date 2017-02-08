import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  project: Project;
  errorMessage: string;
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void{
    this.projectsService.getProjects()
                        .subscribe(
                          response => this.project = response.pop(),
                          error => this.errorMessage = error);
  }

}
