import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailagriculturaRoutingModule } from './detailagricultura-routing.module';
import { DetailagriculturaComponent } from './detailagricultura.component';


@NgModule({
  declarations: [
    DetailagriculturaComponent
  ],
  imports: [
    CommonModule,
    DetailagriculturaRoutingModule
  ]
})
export class DetailagriculturaModule { }
