import { Component } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eggsite';
  constructor (private _service: HttpClient) {}
  projects: string[];

  ngOnInit () {
    this._service.get('../assets/data/projects.json').subscribe(
      data => {
        this.projects = data as string [];
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
