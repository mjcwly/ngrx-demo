import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    MaterialModule, 
    HeroesRoutingModule
  ],
  declarations: [
    HeroesComponent, 
    HeroDetailComponent, 
    HeroListComponent
  ],
  exports: [
    HeroesComponent, 
    HeroDetailComponent
  ],
  providers: []
})
export class HeroesModule {}
