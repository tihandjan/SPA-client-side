import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Project } from '../projects/project';
import { Article } from '../articles/article';
import { ProjectsService } from '../projects/projects.service';
import { ArticlesService } from '../articles/articles.service';

@Component({
  selector: 'app-right-sidenav',
  templateUrl: './right-sidenav.component.html',
  styleUrls: ['./right-sidenav.component.css']
})
export class RightSidenavComponent implements OnInit {
  projects: Project[];
  articles: Article[];
  errorMessage: string;
  constructor(private router: Router, private projectsService: ProjectsService, private articlesService: ArticlesService) { }
  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProjects());
    timer.subscribe(() => this.getArticles());

  }

  onLinkClick($event: any) {
    if($event.index === 2) {
      this.router.navigate(['contacts']);
    }
  }

  getProjects() {
    this.projectsService.getProjects()
                        .subscribe(
                          response => this.projects = response,
                          error => this.errorMessage = error
                        )
  }

  getArticles() {
    this.articlesService.getArticles()
                        .subscribe(
                          response => this.articles = response, 
                          error => this.errorMessage = error
                        )
  }

}
