export * from './actions';
export * from './effects';
export * from './reducers';
export * from './services';

import {
  ClockSetupDispatchers,
  ClockSetupSelectors,
  HeroDispatchers,
  HeroHttpDispatchers,
  HeroDataService,
  HeroSelectors,
  VillainDispatchers,
  VillainDataService,
  VillainSelectors
} from './services';

export const services = [
  ClockSetupDispatchers,
  ClockSetupSelectors,
  HeroDataService,
  HeroDispatchers,
  HeroHttpDispatchers,
  HeroSelectors,
  VillainDispatchers,
  VillainDataService,
  VillainSelectors
];
