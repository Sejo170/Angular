import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Error } from './components/error/error';
import { Info } from './components/info/info';
import { InfoValorant } from './components/info-valorant/info-valorant';

const routes: Routes = [
  {
    path: '',
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'info',
    component: Info
  },
  {
    path: 'info-valorant',
    component: InfoValorant
  },
  {
    path: '**',
    component: Error,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
