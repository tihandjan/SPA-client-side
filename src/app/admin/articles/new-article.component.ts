import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { FileUploader } from 'ng2-file-upload';


import { Article } from '../../articles/article';
import { ArticlesService } from '../../articles/articles.service';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  article: Article = new Article;
  picture_id: number;
  URL = 'http://localhost:3000/picture_create/';
  public uploader: FileUploader = new FileUploader({url: this.URL});

  constructor(
    private articleService: ArticlesService,
    private snackbar: MdSnackBar,
    public viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
  }

  createArticle(article: Article) {
    this.article = new Article;
    this.articleService.createArticle(article)
                .subscribe(
                  data => {
                    this.picture_id = data.pictures[0].id;
                  },
                  error => {
                    return Observable.throw(error);
                  },
                  () => {
                    this.uploader.setOptions({url: this.URL + this.picture_id});
                    this.uploader.uploadAll();
                    setTimeout(()=>{this.showSnack()}, 2500);
                  });
  }

  showSnack(){
    let config = new MdSnackBarConfig();
    this.snackbar.open('Article has been created successfully ', 'Got it', config);
  }

}
