import { ActionReducerMap } from '@ngrx/store';
import * as fromHeroes from './hero.reducer';
import * as fromVillains from './villain.reducer';
import * as fromClock from './clock.reducer';

export interface EntityState {
  heroes: fromHeroes.HeroState;
  villains: fromVillains.VillainState;
  clock: fromClock.ClockState
}

export const reducers: ActionReducerMap<EntityState> = {
  heroes: fromHeroes.reducer,
  villains: fromVillains.reducer,
  clock: fromClock.reducer
  // here is where i put other reducers, when i have them
};
