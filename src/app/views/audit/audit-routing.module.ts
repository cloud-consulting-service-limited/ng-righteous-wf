import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditComponent } from './audit.component';

const routes: Routes = [
  {
    path: '',
    component: AuditComponent,
    data: {
      title: 'Audit'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule {}
