import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxreturnComponent } from './taxreturn.component';

const routes: Routes = [
  {
    path: '',
    component: TaxreturnComponent,
    data: {
      title: 'Taxreturn'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxreturnRoutingModule {}
