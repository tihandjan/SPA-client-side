import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';
import { Observable } from 'rxjs/Rx';


import { Article } from '../../articles/article';
import { ArticlesService } from '../../articles/articles.service';


@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {
  article: Article = new Article;
  constructor(
    private articleService: ArticlesService,
    private snackbar: MdSnackBar,
    public viewContainerRef: ViewContainerRef,
  ) { }

  ngOnInit() {
  }

  createArticle(article: Article) {
    this.showSnack();
    this.article = new Article;
    this.articleService.createArticle(article)
                .subscribe(
                  data => {
                    return true; 
                  },
                  error => {
                    return Observable.throw(error);
                  });
  }

  showSnack(){
    let config = new MdSnackBarConfig();
    this.snackbar.open('Article has been created successfully ', 'Got it', config);
  }

}
