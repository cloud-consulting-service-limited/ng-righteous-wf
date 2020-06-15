import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Nar1Component } from './nar1.component';

const routes: Routes = [
  {
    path: '',
    component: Nar1Component,
    data: {
      title: 'Nar1'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Nar1RoutingModule {}
