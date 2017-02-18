import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticlesService } from './articles.service';
import { url } from '../shared/url.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  article: Article;
  articles: Article[];
  errorMessage: string;
  url: string = url;

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.articlesService.getArticles()
          .subscribe(
            response => {
              this.article = response[0];
              this.articles = response;
            },
            error => this.errorMessage = error
          )
              
  }


}
