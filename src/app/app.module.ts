import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { Angular2TokenService } from 'angular2-token';

import 'hammerjs';

import { ProjectsService } from './projects/projects.service';
import { ArticlesService } from './articles/articles.service';

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SigninComponent } from './registration/signin.component';
import { SignupComponent } from './registration/signup.component';
import { SigninFormComponent } from './registration/forms/signin-form/signin-form.component';
import { SignupFormComponent } from './registration/forms/signup-form/signup-form.component';

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
    PageNotFoundComponent,
    PaginationComponent,
    SigninComponent,
    SignupComponent,
    SigninFormComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [ProjectsService, ArticlesService, Angular2TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
