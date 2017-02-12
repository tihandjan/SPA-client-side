import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProjectsService } from './projects.service';
import { Project } from './project';

@Component({
    selector: 'app-show-project',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.css']
})

export class ShowProjectComponent implements OnInit {
    project = {};
    projects = [];
    errorMessage: string;

    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService
    ) {}

    ngOnInit(): void {
        let response = this.route.params
                            .flatMap((params: Params) =>
                            this.projectsService.getProject(params['title']));
        response.subscribe(
            response => this.project = response.json(),
            error => this.errorMessage = error
        );
        this.projectsService.getProjects()
            .subscribe(
                response => this.projects = response,
                error => this.errorMessage = error
            );
    }
}