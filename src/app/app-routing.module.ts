import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WikiDisplayComponentComponent } from './wiki-display-component/wiki-display-component.component';
import { WikiEditComponentComponent } from './wiki-edit-component/wiki-edit-component.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wiki/home',
    pathMatch: 'full'
  },
  {
    path: 'wiki/:page',
    component: WikiDisplayComponentComponent
  },
  {
    path: 'wiki/edit/:page',
    component: WikiEditComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
