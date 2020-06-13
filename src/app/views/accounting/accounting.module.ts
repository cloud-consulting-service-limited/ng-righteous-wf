import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AccountingComponent } from './accounting.component';
import { AccountingRoutingModule } from './accounting-routing.module';

@NgModule({
  imports: [
    FormsModule,
    AccountingRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ AccountingComponent ]
})
export class AccountingModule { }
