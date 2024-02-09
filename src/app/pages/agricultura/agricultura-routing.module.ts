import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgriculturaComponent } from   './agricultura.component';

const routes: Routes = [
  { path: '', component: AgriculturaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgriculturaRoutingModule { }
