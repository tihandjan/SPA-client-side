import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from './article';

@Injectable()
export class ArticlesService {
    request_url: string = 'http://localhost:3000/articles'
    constructor(
        private http: Http
    ) {}

    getArticles(): Observable<Article[]> {
        return this.http.get(this.request_url)
                        .map((response: Response) => <Article[]>response.json())
                        .catch(this.handleError);
    }

    getArticle(id: number) {
        return this.http.get(this.request_url + '/' + id + '.json')
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