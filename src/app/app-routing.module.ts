import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShowProjectComponent } from './projects/show-project.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleShowComponent } from './articles/show-article.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'projects/:id', component: ShowProjectComponent },
    { path: 'articles', component: ArticlesComponent },
    { path: 'articles/:id', component: ArticleShowComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}