import { Component, OnInit } from '@angular/core';

import { Article } from './article';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  article: Article;
  articles: Article[];
  errorMessage: string;

  constructor(
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.articlesService.getArticles()
          .subscribe(
            response => {
              this.article = response.pop();
              this.articles = response;
            },
            error => this.errorMessage = error
          )
              
  }


}
