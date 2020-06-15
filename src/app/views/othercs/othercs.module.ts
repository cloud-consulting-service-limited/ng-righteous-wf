import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { OthercsComponent } from './othercs.component';
import { OthercsRoutingModule } from './othercs-routing.module';

@NgModule({
  imports: [
    FormsModule,
    OthercsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ OthercsComponent ]
})
export class OthercsModule { }
