import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClockSetupRoutingModule } from './clock-setup-routing.module';
import { ClockSetupComponent } from './clock-setup.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule, 
    MaterialModule,
    ClockSetupRoutingModule
  ],
  declarations: [
    ClockSetupComponent
  ],
  exports: [
    ClockSetupComponent
  ],
  providers: []
})
export class ClockSetupModule { }
