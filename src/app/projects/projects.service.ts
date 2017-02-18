import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Project } from './project';
import { url } from '../shared/url.component';

@Injectable()
export class ProjectsService {
  projects_url: string = url + 'projects';
  constructor(private http: Http) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.projects_url)
              .map((response: Response) => <Project[]>response.json())
              .catch(this.handleError);
  }

  getProject(title: string) {
    return this.http.get(this.projects_url + '/' + title + '.json');
  }

  createProject(project: Project) {
    let headers = new Headers({ 'Content-type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/projects', JSON.stringify(project), options)
                  .map((response: Response) => response.json());
  }

  deleteProject(id: number) {
    let headers = new Headers({ 'Content-type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.delete((this.projects_url + '/' + id), options);
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
