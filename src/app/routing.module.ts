import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GameComponent} from './components/game/game.component';
import {AboutComponent} from './components/about/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class RoutingModule { }
