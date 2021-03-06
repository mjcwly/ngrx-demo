import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { EntityState } from "../reducers";
import { Injectable } from "@angular/core";

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getDateTime = createSelector(
  getEntityState,
  (state: EntityState) => {
    const year = state.clockSetup.year;
    const month = ('0' + state.clockSetup.month).slice(-2);
    const day = ('0' + state.clockSetup.day).slice(-2);
    const hours = ('0' + state.clockSetup.hours).slice(-2);
    const minutes = ('0' + state.clockSetup.minutes).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
);

const getYear = createSelector(getEntityState, (state: EntityState) => state.clockSetup.year);

const getMonth = createSelector(
  getEntityState,
  (state: EntityState) => {
    const months = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' };
    return months[state.clockSetup.month]
  });

const getDay = createSelector(
  getEntityState,
  (state: EntityState) => {
    let d = state.clockSetup.day;
    let result = '' + d + (31 == d || 21 == d || 1 == d ? "st" : 22 == d || 2 == d ? "nd" : 23 == d || 3 == d ? "rd" : "th")
    return result;
  }
)

const getHours = createSelector(getEntityState, (state: EntityState) => state.clockSetup.hours);
const getMinutes = createSelector(getEntityState, (state: EntityState) => state.clockSetup.minutes);
const getMode = createSelector(getEntityState, (state: EntityState) => state.clockSetup.mode);

@Injectable()
export class ClockSetupSelectors {
  constructor(private store: Store<EntityState>) { }
  dateTime$ = this.store.select(getDateTime);
  year$ = this.store.select(getYear);
  month$ = this.store.select(getMonth);
  day$ = this.store.select(getDay);
  hours$ = this.store.select(getHours);
  minutes$ = this.store.select(getMinutes);
  mode$ = this.store.select(getMode);
}