import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AuditComponent } from './audit.component';
import { AuditRoutingModule } from './audit-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AuditRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AuditComponent ]
})
export class AuditModule { }
