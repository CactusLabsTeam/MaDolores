import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailagriculturaComponent } from './detailagricultura.component';

const routes: Routes = [
 { path: '', component: DetailagriculturaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailagriculturaRoutingModule { }
