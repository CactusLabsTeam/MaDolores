import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmbasadoraRoutingModule } from './embasadora-routing.module';
import { EmbasadoraComponent } from './embasadora.component';


@NgModule({
  declarations: [
    EmbasadoraComponent
  ],
  imports: [
    CommonModule,
    EmbasadoraRoutingModule
  ]
})
export class EmbasadoraModule { }
