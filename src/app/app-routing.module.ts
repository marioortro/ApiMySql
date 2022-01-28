import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameListComponent} from "./components/game-list/game-list.component";
import {GameFormComponent} from "./components/game-form/game-form.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/games/list'
  },
  {
    path: 'games/list',
    component: GameListComponent
  },
  {
    path: 'games/add',
    component: GameFormComponent
  },
  {
    path: 'games/edit/:id',
    component: GameFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
