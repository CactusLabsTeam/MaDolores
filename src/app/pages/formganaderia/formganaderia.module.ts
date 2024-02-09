import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormganaderiaRoutingModule } from './formganaderia-routing.module';
import { FormganaderiaComponent } from './formganaderia.component';


@NgModule({
  declarations: [
    FormganaderiaComponent
  ],
  imports: [
    CommonModule,
    FormganaderiaRoutingModule
  ]
})
export class FormganaderiaModule { }
