import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormganaderiaComponent } from './formganaderia.component';

const routes: Routes = [
  { path: '', component: FormganaderiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormganaderiaRoutingModule { }
