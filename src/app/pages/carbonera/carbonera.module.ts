import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarboneraRoutingModule } from './carbonera-routing.module';
import { CarboneraComponent } from './carbonera.component';


@NgModule({
  declarations: [
    CarboneraComponent
  ],
  imports: [
    CommonModule,
    CarboneraRoutingModule
  ]
})
export class CarboneraModule { }
