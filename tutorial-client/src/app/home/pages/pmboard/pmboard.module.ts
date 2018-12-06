import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmboardRoutingModule } from './pmboard-routing.module';
import { PmboardComponent } from './pmboard.component';

@NgModule({
  imports: [
    CommonModule,
    PmboardRoutingModule
  ],
  declarations: [PmboardComponent]
})
export class PmboardModule { }
