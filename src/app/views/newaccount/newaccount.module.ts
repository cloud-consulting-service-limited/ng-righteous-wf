import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CommonModule } from '@angular/common';  
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


import { NewaccountComponent } from './newaccount.component';
import { NewaccountCreateComponent } from './newaccountCreate.component';
import { NewaccountBasicComponent } from './newaccountBasic.component';
import { NewaccountQuotationComponent } from './newaccountQuotation.component';
import { NewaccountRoutingModule } from './newaccount-routing.module';

import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  imports: [
    NgxDatatableModule,
    NewaccountRoutingModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    AccordionModule.forRoot(),
    TypeaheadModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  declarations: [ NewaccountComponent ,NewaccountCreateComponent, NewaccountBasicComponent, NewaccountQuotationComponent]
})
export class NewaccountModule { }
