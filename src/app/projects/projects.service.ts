import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Project } from './project';

@Injectable()
export class ProjectsService {
  projects_url: string = 'http://localhost:3000/projects'
  constructor(private http: Http) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.projects_url)
              .map((response: Response) => <Project[]>response.json())
              .catch(this.handleError);
  }

  getProject(id: number) {
    return this.http.get(this.projects_url + '/' + id + '.json');
  }

  createProject(project: Project) {
    let headers = new Headers({ 'Content-type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/projects', JSON.stringify(project), options)
                  .map((response: Response) => response.json());
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
