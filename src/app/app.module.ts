import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
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
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [ProjectsService, ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
