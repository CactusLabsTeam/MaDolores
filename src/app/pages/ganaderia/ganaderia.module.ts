import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanaderiaRoutingModule } from './ganaderia-routing.module';
import { GanaderiaComponent } from './ganaderia.component';


@NgModule({
  declarations: [
    GanaderiaComponent
  ],
  imports: [
    CommonModule,
    GanaderiaRoutingModule
  ]
})
export class GanaderiaModule { }
