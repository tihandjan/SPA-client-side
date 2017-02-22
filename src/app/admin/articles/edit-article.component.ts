import { Component, OnInit, OnDestroy } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { ArticlesService } from '../../articles/articles.service';
import { Article } from '../../articles/article';
import { url } from '../../shared/url.component';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class EditArticleComponent implements OnInit, OnDestroy {
  article: Article;
  URL = url + 'picture_create/';
  public uploader: FileUploader = new FileUploader({url: this.URL});
  constructor(
    private articlesService: ArticlesService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.params.subscribe(
      params => {
        this.getArticle(+params['id']);
      }
    )
  }

  getArticle(id) {
    this.articlesService.getArticle(id)
          .subscribe(
            response => {
              this.article = response;
            },
            error => console.log(error)
          )
  }

  ngOnDestroy() { console.log(`onDestroy`); }


}