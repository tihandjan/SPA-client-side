import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

import { Project } from '../../projects/project';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  moduleId: module.id,
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  project = new Project;
  constructor(
    private projectService: ProjectsService,
    private snackbar: MdSnackBar,
    public viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
  }

  createProject(project: Project) {
    this.project = new Project;
    this.showSnack();
    this.projectService.createProject(project)
          .subscribe(
            date => {
              return true;
            },
            error => {
              return Observable.throw(error);
            }
          )
                
  }

  showSnack(){
    let config = new MdSnackBarConfig();
    this.snackbar.open('Project has been created successfully ', 'Got it', config);
  }
  

}
