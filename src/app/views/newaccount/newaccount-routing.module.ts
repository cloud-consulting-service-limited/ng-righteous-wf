import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewaccountComponent } from './newaccount.component';
import { NewaccountCreateComponent } from './newaccountCreate.component';
import { NewaccountBasicComponent } from './newaccountBasic.component';
import { NewaccountQuotationComponent } from './newaccountQuotation.component';

const routes: Routes = [
  {
    path: '',
    component: NewaccountComponent,
    data: {
      title: 'New account'
    },
  },
  {
      path: 'create',
      component: NewaccountBasicComponent,
      data: {
        title: 'Create Account /  0. Basic Company Info'
      },
      children: [
          {
              path: ':id',
              component: NewaccountBasicComponent,
              data: {
                title: 'Create Account -> 0. Basic Company Info'
              }
          }
      ]
  },
  {
      path: 'invoice',
      component: NewaccountComponent,
      data: {
        title: 'Create Account / 2. Invoice'
      },
      children: [
          {
              path: ':id',
              component: NewaccountComponent,
              data: {
                title: 'Create Account / 2. Invoice'
              }
          }
      ]
  },
  {
      path: 'quotation',
      component: NewaccountQuotationComponent,
      data: {
        title: 'Create Account /  1. Quotation'
      },
      children: [
          {
              path: ':id',
              component: NewaccountQuotationComponent,
              data: {
                title: 'Create Account -> 1. Quotation'
              }
          }
      ]
  },
  {
      path: 'detail',
      component: NewaccountCreateComponent,
      data: {
        title: 'Create Account -> 3. Enter account details'
      },
      children: [
          {
              path: ':id',
              component: NewaccountCreateComponent,
              data: {
                title: 'Create Account -> 3. Enter account details'
              }
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewaccountRoutingModule {}
