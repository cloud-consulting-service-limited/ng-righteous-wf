import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { Nar1Component } from './nar1.component';
import { Nar1RoutingModule } from './nar1-routing.module';

@NgModule({
  imports: [
    FormsModule,
    Nar1RoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ Nar1Component ]
})
export class Nar1Module { }
