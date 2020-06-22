import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard'
    },
    children: [
        {
            path: 'list',
            component: DashboardComponent,
            data: {
              title: 'List'
            },
            children: [
                {
                    path: ':id',
                    component: DashboardComponent,
                    data: {
                      title: 'Get Detail by ID'
                    }
                }
            ]
        },
        {
            path: 'detail',
            component: DashboardComponent,
            data: {
              title: 'Detail'
            },
            children: [
                {
                    path: ':id',
                    component: DashboardComponent,
                    data: {
                      title: 'Create Details'
                    }
                }
            ]
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
