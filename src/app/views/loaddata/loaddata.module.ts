import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { LoaddataComponent } from './loaddata.component';
import { LoaddataRoutingModule } from './loaddata-routing.module';

@NgModule({
  imports: [
    FormsModule,
    LoaddataRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ LoaddataComponent ]
})
export class LoaddataModule { }
