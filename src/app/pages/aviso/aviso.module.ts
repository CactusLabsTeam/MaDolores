import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvisoRoutingModule } from './aviso-routing.module';
import { AvisoComponent } from './aviso.component';


@NgModule({
  declarations: [
    AvisoComponent
  ],
  imports: [
    CommonModule,
    AvisoRoutingModule
  ]
})
export class AvisoModule { }
