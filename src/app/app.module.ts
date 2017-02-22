import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { FileSelectDirective } from 'ng2-file-upload';
import 'hammerjs';
import { CKEditorModule } from 'ng2-ckeditor';

import { ProjectsService } from './projects/projects.service';
import { ArticlesService } from './articles/articles.service';
import { AdminGuard } from './admin/admin.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ChangestyleComponent } from './changestyle/changestyle.component';
import { RightSidenavComponent } from './right-sidenav/right-sidenav.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { ArticlesComponent } from './articles/articles.component';
import { ShowProjectComponent } from './projects/show-project.component';
import { ArticleShowComponent } from './articles/show-article.component';
import { TruncatePipe } from './truncate.pipe';
import { AdminComponent } from './admin/admin.component';
import { NewArticleComponent } from './admin/articles/new-article.component';
import { NewProjectComponent } from './admin/projects/new-project.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ArticlesListComponent } from './admin/articles/articles-list.component';
import { ProjectsListComponent } from './admin/projects/projects-list.component';
import { EditArticleComponent } from './admin/articles/edit-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ChangestyleComponent,
    RightSidenavComponent,
    ContactsComponent,
    ProjectsComponent,
    ArticlesComponent,
    ShowProjectComponent,
    ArticleShowComponent,
    TruncatePipe,
    AdminComponent,
    NewArticleComponent,
    NewProjectComponent,
    PageNotFoundComponent,
    PaginationComponent,
    FileSelectDirective,
    ArticlesListComponent,
    ProjectsListComponent,
    EditArticleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [ProjectsService, ArticlesService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
