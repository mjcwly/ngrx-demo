  import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClockSetupComponent } from './clock-setup.component';

const routes: Routes = [{ path: '', component: ClockSetupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClockSetupRoutingModule { }
