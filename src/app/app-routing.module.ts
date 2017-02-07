import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'articles', component: ArticlesComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}