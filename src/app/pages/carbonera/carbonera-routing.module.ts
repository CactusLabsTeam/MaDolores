import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarboneraComponent } from './carbonera.component';

const routes: Routes = [
  { path: '', component: CarboneraComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarboneraRoutingModule { }
