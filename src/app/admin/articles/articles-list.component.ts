import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ArticlesService } from '../../articles/articles.service';
import { Article } from '../../articles/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Array<Article>;
  errorMessages: string;
  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.articlesService.getArticles()
          .subscribe(
            response => this.articles = response,
            error => this.errorMessages = error
          );
  }

  deleteArticle(article) {
    this.articlesService.deleteArticle(article.id)
          .subscribe(
            response => { return true },
            error => Observable.throw(error),
            () => this.deleteArticleFromArray(article)
          );
  }

  deleteArticleFromArray(article) {
    let index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
  }

}
