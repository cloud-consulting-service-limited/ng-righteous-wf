import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DocioComponent } from './docio.component';
import { DocioRoutingModule } from './docio-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DocioRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DocioComponent ]
})
export class DocioModule { }
