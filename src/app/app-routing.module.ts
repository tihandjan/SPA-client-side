import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShowProjectComponent } from './projects/show-project.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleShowComponent } from './articles/show-article.component';
import { AdminComponent } from './admin/admin.component';
import { NewArticleComponent } from './admin/articles/new-article.component';
import { NewProjectComponent } from './admin/projects/new-project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticlesListComponent } from './admin/articles/articles-list.component';
import { ProjectsListComponent } from './admin/projects/projects-list.component';
import { EditArticleComponent } from './admin/articles/edit-article.component';
import { SigninComponent } from './registration/signin.component';
import { SignupComponent } from './registration/signup.component';
import { AdminGuard } from './admin/admin.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:title', component: ShowProjectComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/:title', component: ArticleShowComponent }, 
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'admin', 
      component: AdminComponent , canActivate: [AdminGuard],
      children: [
        { path: 'articles/new', component: NewArticleComponent },
        { path: 'projects/new', component: NewProjectComponent },
        { path: 'articles', component: ArticlesListComponent },
        { path: 'projects', component: ProjectsListComponent },
        { path: 'articles/:id/edit', component: EditArticleComponent },
      ]
    },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}