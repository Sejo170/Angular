import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Error } from './components/error/error';
import { Info } from './components/info/info';
import { InfoValorant } from './components/info-valorant/info-valorant';
import { InfoDisney } from './components/info-disney/info-disney';
import { InfoFinalspace } from './components/info-finalspace/info-finalspace';
import { InfoDisney2 } from './components/info-disney2/info-disney2';
import { InfoValo } from './components/info-valo/info-valo';

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
    path: 'info-disney',
    component: InfoDisney
  },
  {
    path: 'info-finalspace',
    component: InfoFinalspace
  },
  {
    path: 'info-disney2',
    component: InfoDisney2
  },
  {
    path: 'info-valo',
    component: InfoValo
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
