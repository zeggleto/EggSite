import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private _projectUrl = 'assets/data/projects.json';
  constructor(private http: HttpClient) { }
}
