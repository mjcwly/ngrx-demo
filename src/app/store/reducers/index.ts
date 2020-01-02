import { ActionReducerMap } from '@ngrx/store';
import * as fromHeroes from './hero.reducer';
import * as fromVillains from './villain.reducer';
import * as fromClockSetup from './clock-setup.reducer';

export interface EntityState {
  heroes: fromHeroes.HeroState;
  villains: fromVillains.VillainState;
  clockSetup: fromClockSetup.ClockSetupState
}

export const reducers: ActionReducerMap<EntityState> = {
  heroes: fromHeroes.reducer,
  villains: fromVillains.reducer,
  clockSetup: fromClockSetup.reducer
  // here is where i put other reducers, when i have them
};
