import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgriculturaRoutingModule } from './agricultura-routing.module';
import { AgriculturaComponent } from './agricultura.component';


@NgModule({
  declarations: [
    AgriculturaComponent
  ],
  imports: [
    CommonModule,
    AgriculturaRoutingModule
  ]
})
export class AgriculturaModule { }
