import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocioComponent } from './docio.component';

const routes: Routes = [
  {
    path: '',
    component: DocioComponent,
    data: {
      title: 'Docio'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocioRoutingModule {}
