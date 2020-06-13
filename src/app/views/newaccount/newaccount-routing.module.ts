import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewaccountComponent } from './newaccount.component';
import { NewaccountCreateComponent } from './newaccountCreate.component';

const routes: Routes = [
  {
    path: '',
    component: NewaccountComponent,
    data: {
      title: 'New account'
    }
  },
  {
    path: ':id',
    component: NewaccountCreateComponent,
    data: {
      title: 'New account -> Create'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewaccountRoutingModule {}
