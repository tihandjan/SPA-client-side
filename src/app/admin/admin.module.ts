import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { CKEditorModule } from 'ng2-ckeditor';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AdminComponent } from './admin.component';
import { ArticlesListComponent } from './articles/articles-list.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { EditArticleComponent } from './articles/edit-article.component';
import { NewArticleComponent } from './articles/new-article.component';
import { NewProjectComponent } from './projects/new-project.component';
import { AdminGuard } from './admin.guard';
import { adminRouting } from './admin.routing.module';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        CommonModule,
        FormsModule,
        CKEditorModule,
        HttpModule,
        adminRouting
    ],
    exports: [],
    declarations: [
        AdminComponent,
        ArticlesListComponent,
        NewArticleComponent,
        EditArticleComponent,
        ProjectsListComponent,
        NewProjectComponent,
        FileSelectDirective,
    ],
    providers: [AdminGuard],
})
export class AdminModule { }
