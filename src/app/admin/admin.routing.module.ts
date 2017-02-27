import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ArticlesListComponent } from './articles/articles-list.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { EditArticleComponent } from './articles/edit-article.component';
import { NewArticleComponent } from './articles/new-article.component';
import { NewProjectComponent } from './projects/new-project.component';
import { AdminGuard } from './admin.guard';


const routes: Routes = [
  { path: '', 
      component: AdminComponent , canActivate: [AdminGuard],
      children: [
        { path: 'articles/new', component: NewArticleComponent },
        { path: 'projects/new', component: NewProjectComponent },
        { path: 'articles', component: ArticlesListComponent },
        { path: 'projects', component: ProjectsListComponent },
        { path: 'articles/:id/edit', component: EditArticleComponent },
      ]
    },
];

export const adminRouting = RouterModule.forChild(routes)
