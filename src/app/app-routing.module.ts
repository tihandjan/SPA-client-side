import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { ShowProjectComponent } from './projects/show-project.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleShowComponent } from './articles/show-article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './registration/signin.component';
import { SignupComponent } from './registration/signup.component';

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
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}