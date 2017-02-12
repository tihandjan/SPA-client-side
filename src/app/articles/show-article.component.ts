import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Params, ActivatedRoute } from '@angular/router';

import { Article } from './article';
import { PaginationComponent } from '../pagination/pagination.component';
import { ArticlesService } from './articles.service';

@Component({
    selector: 'app-show-article',
    templateUrl: 'articles.component.html',
    styleUrls: ['articles.component.css']
})

export class ArticleShowComponent implements OnInit {
    article = {};
    articles = [];
    errorMessage: string;
    constructor(
        private route: ActivatedRoute,
        private articleService: ArticlesService
    ) {}

    ngOnInit(): void {
        let request = this.route.params
                            .flatMap((params: Params) => this.articleService.getArticle(params['title']));
        request.subscribe(
            response => this.article = response.json(),
            error => this.errorMessage = error
        );
        this.articleService.getArticles()
            .subscribe(
                response => {
                    this.articles = response;
                    console.log(this.articles);
                },
                error => this.errorMessage = error
            )
    }
}