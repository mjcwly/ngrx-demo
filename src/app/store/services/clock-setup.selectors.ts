import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { EntityState } from "../reducers";
import { Injectable } from "@angular/core";

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getClockSetup = createSelector(
  getEntityState,
  (state: EntityState) => state.clockSetup.year + '/' + state.clockSetup.month + '/' + state.clockSetup.day + ' ' + state.clockSetup.hours + ':' + state.clockSetup.minutes
);

@Injectable()
export class ClockSetupSelectors {
  constructor(private store: Store<EntityState>) {}
  clockSetup$ = this.store.select(getClockSetup);
}