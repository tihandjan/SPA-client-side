import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { FileUploader } from 'ng2-file-upload';

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
  picture_id: number;
  URL = 'http://localhost:3000/picture_create/';
  public uploader: FileUploader = new FileUploader({url: this.URL});

  constructor(
    private projectService: ProjectsService,
    private snackbar: MdSnackBar,
    public viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
  }

  createProject(project: Project) {
    this.project = new Project;
    this.projectService.createProject(project)
          .subscribe(
            data => {
              this.picture_id = data.pictures[0].id;
            },
            error => {
              return Observable.throw(error);
            },
            () => {
              this.uploader.setOptions({url: this.URL + this.picture_id});
              this.uploader.uploadAll();
              setTimeout(() => {this.showSnack()}, 2000);
          });
                
  }

  showSnack(){
    let config = new MdSnackBarConfig();
    this.snackbar.open('Project has been created successfully ', 'Got it', config);
  }

}
