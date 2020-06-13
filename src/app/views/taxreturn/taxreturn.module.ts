import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TaxreturnComponent } from './taxreturn.component';
import { TaxreturnRoutingModule } from './taxreturn-routing.module';

@NgModule({
  imports: [
    FormsModule,
    TaxreturnRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ TaxreturnComponent ]
})
export class TaxreturnModule { }
