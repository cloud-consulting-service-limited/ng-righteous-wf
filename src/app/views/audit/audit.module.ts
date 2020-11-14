import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CommonModule } from '@angular/common';

import { AuditComponent } from './audit.component';
import { AuditCoInfoComponent } from './auditCoInfo.component';
import { AuditPreAuditS1Component } from './auditPreAuditS1.component';
import { AuditTBComponent } from './auditTB.component';
import { AuditTBAdjComponent } from './auditTBAdj.component';
import { AuditTrackingComponent } from './auditTracking.component';
import { AuditRoutingModule } from './audit-routing.module';



@NgModule({
  imports: [
    FormsModule,
    AuditRoutingModule,
    ChartsModule,
    BsDropdownModule,
    NgxDatatableModule,
    CommonModule,
    AccordionModule.forRoot(),
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ AuditComponent , AuditCoInfoComponent, AuditPreAuditS1Component, AuditTBComponent, AuditTBAdjComponent, AuditTrackingComponent ]
})
export class AuditModule { }
