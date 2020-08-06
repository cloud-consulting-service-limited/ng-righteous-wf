import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditComponent } from './audit.component';
import { AuditCoInfoComponent } from './auditCoInfo.component';
import { AuditPreAuditS1Component } from './auditPreAuditS1.component';
import { AuditTBComponent } from './auditTB.component';
import { AuditTrackingComponent } from './auditTracking.component';


const routes: Routes = [
  {
    path: '',
    component: AuditComponent,
    data: {
      title: 'Audit'
    }
  },
  {
    path: 'coinfo',
    component: AuditCoInfoComponent,
    data: {
      title: 'Audit /  0. Double Check CO Info'
    },
    children: [
      {
        path: ':id',
        component: AuditCoInfoComponent,
        data: {
          title: 'Audit -> 0. Double Check CO Info'
        },
        children: [
          {
            path: ':year',
            component: AuditCoInfoComponent,
            data: {
              title: 'Audit -> 0. Double Check CO Info'
            }
          }
        ]
      }
    ]
  },
  {
    path: 'preAuditDoc',
    component: AuditPreAuditS1Component,
    data: {
      title: 'Audit / 1. General Pre-audit document (S1)'
    },
    children: [
      {
        path: ':id',
        component: AuditPreAuditS1Component,
        data: {
          title: 'Audit / 1. General Pre-audit document (S1)'
        },
        children: [
          {
            path: ':year',
            component: AuditPreAuditS1Component,
            data: {
              title: 'Audit -> 1. General Pre-audit document (S1)'
            }
          }
        ]
      }
    ]
  },
  {
    path: 'TB',
    component: AuditTBComponent,
    data: {
      title: 'Audit / 2. Input TB'
    },
    children: [
      {
        path: ':id',
        component: AuditTBComponent,
        data: {
          title: 'Audit / 2. Input TB'
        },
        children: [
          {
            path: ':year',
            component: AuditTBComponent,
            data: {
              title: 'Audit -> 2. Input TB'
            }
          }
        ]
      }
    ]
  },
  {
    path: 'tracking',
    component: AuditTrackingComponent,
    data: {
      title: 'Audit / 3. Document Tracking'
    },
    children: [
      {
        path: ':id',
        component: AuditTrackingComponent,
        data: {
          title: 'Audit / 3. Document Tracking'
        },
        children: [
          {
            path: ':year',
            component: AuditTrackingComponent,
            data: {
              title: 'Audit -> 3. Document Tracking'
            }
          }
        ]
      }
    ]
  },
  {
    path: 'detail',
    component: AuditComponent,
    data: {
      title: 'Audit -> 4. Enter account details'
    },
    children: [
      {
        path: ':id',
        component: AuditComponent,
        data: {
          title: 'Audit -> 4. Enter account details'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule { }
