import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { RoComponent } from './ro.component';
import { RoRoutingModule } from './ro-routing.module';

@NgModule({
  imports: [
    FormsModule,
    RoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ RoComponent ]
})
export class RoModule { }
