import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'jobs',
        loadChildren: () => import('./views/jobs/jobs.module').then(m => m.JobsModule)
      },
      {
        path: 'accounting',
        loadChildren: () => import('./views/accounting/accounting.module').then(m => m.AccountingModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./views/report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'ro',
        loadChildren: () => import('./views/ro/ro.module').then(m => m.RoModule)
      },
      {
        path: 'docio',
        loadChildren: () => import('./views/docio/docio.module').then(m => m.DocioModule)
      },
      {
        path: 'taxreturn',
        loadChildren: () => import('./views/taxreturn/taxreturn.module').then(m => m.TaxreturnModule)
      },
      {
        path: 'newaccount',
        loadChildren: () => import('./views/newaccount/newaccount.module').then(m => m.NewaccountModule)
      },
      {
        path: 'audit',
        loadChildren: () => import('./views/audit/audit.module').then(m => m.AuditModule)
      },
      {
        path: 'nar1',
        loadChildren: () => import('./views/nar1/nar1.module').then(m => m.Nar1Module)
      },
      {
        path: 'othercs',
        loadChildren: () => import('./views/othercs/othercs.module').then(m => m.OthercsModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
