import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoComponent } from './ro.component';

const routes: Routes = [
  {
    path: '',
    component: RoComponent,
    data: {
      title: 'Ro'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoRoutingModule {}
