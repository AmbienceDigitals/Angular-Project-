import { NgModule } from '@angular/core';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'directory',
    component: DirectoryComponent
},
  { path: '',
  component: HomeComponent
},
];

export const routes_provider = [
  provideRoutes(routes)
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
