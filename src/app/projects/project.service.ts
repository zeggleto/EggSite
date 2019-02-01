import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projectUrl = 'assets/data/projects.json';
  projects: Project[];
  constructor(private http: HttpClient) { }

  getProjects(): Observable<any> {
    return this.http.get<any>('assets/data/projects.json').pipe(
      catchError(this.handleError));
    this.http.get<Project[]>('assets/data/projects.json').subscribe(
      data => {
        return data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
        return null;
      }
    );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.error() || 'Server error');
  }
}
