import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GanaderiaComponent } from   './ganaderia.component';

const routes: Routes = [
  { path: '', component: GanaderiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GanaderiaRoutingModule { }
