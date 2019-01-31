import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: IntroComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'projects', loadChildren: 'src/app/projects/projects.module#ProjectsModule'},

  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
