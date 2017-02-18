import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from './article';
import { url } from '../shared/url.component';

@Injectable()
export class ArticlesService {
    request_url: string = url + 'articles'
    constructor(
        private http: Http
    ) {}

    getArticles(): Observable<Article[]> {
        return this.http.get(this.request_url)
                        .map((response: Response) => <Article[]>response.json())
                        .catch(this.handleError);
    }

    getArticle(title: string) {
        return this.http.get(this.request_url + '/' + title + '.json');
    }

    createArticle(article: Article) {
      let headers = new Headers({ 'Content-type': 'application/json' });
      let options = new RequestOptions({ headers: headers })
      return this.http.post(this.request_url, JSON.stringify(article), options)
                  .map((response: Response) => response.json());
    }

    deleteArticle(id: number) {
      let headers = new Headers({ 'Content-type': 'application/json' });     
      let options = new RequestOptions({ headers: headers });
      return this.http.delete((this.request_url + '/' + id), options);
    }

    private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}