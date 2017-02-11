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

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ShowProjectComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/:id', component: ArticleShowComponent }, 
    { path: 'admin', component: AdminComponent },
    { path: 'admin/articles/new', component: NewArticleComponent },
    { path: 'admin/projects/new', component: NewProjectComponent },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}