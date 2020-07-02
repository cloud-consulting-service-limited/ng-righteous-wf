import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewaccountComponent } from './newaccount.component';
import { NewaccountCreateComponent } from './newaccountCreate.component';
import { NewaccountBasicComponent } from './newaccountBasic.component';
import { NewaccountQuotationComponent } from './newaccountQuotation.component';
import { NewaccountInvoiceComponent } from './newaccountInvoice.component';
import { NewaccountDocumentComponent } from './newaccountDocument.component';

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
      component: NewaccountInvoiceComponent,
      data: {
        title: 'Create Account / 2. Invoice'
      },
      children: [
          {
              path: ':id',
              component: NewaccountInvoiceComponent,
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
      path: 'document',
      component: NewaccountDocumentComponent,
      data: {
        title: 'Create Account /  3. Document Upload'
      },
      children: [
          {
              path: ':id',
              component: NewaccountDocumentComponent,
              data: {
                title: 'Create Account -> 3. Document Upload'
              }
          }
      ]
  },
  {
      path: 'detail',
      component: NewaccountCreateComponent,
      data: {
        title: 'Create Account -> 4. Enter account details'
      },
      children: [
          {
              path: ':id',
              component: NewaccountCreateComponent,
              data: {
                title: 'Create Account -> 4. Enter account details'
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
