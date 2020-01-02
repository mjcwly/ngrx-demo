export * from './actions';
export * from './effects';
export * from './reducers';
export * from './services';

import {
  ClockSetupDispatchers,
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
  HeroDataService,
  HeroDispatchers,
  HeroHttpDispatchers,
  HeroSelectors,
  VillainDispatchers,
  VillainDataService,
  VillainSelectors
];
