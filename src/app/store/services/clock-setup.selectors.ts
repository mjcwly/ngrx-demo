import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { EntityState } from "../reducers";
import { Injectable } from "@angular/core";

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getYear = createSelector(getEntityState, (state: EntityState) => state.clock.dateTimeSetup.yearState.getCurrentValue());

const getMonth = createSelector(
  getEntityState,
  (state: EntityState) => {
    const months = { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' };
    return months[state.clock.dateTimeSetup.monthState.getCurrentValue()]
  });

const getDay = createSelector(
  getEntityState,
  (state: EntityState) => {
    let d = state.clock.dateTimeSetup.dayState.getCurrentValue();
    let result = '' + d + (31 == d || 21 == d || 1 == d ? "st" : 22 == d || 2 == d ? "nd" : 23 == d || 3 == d ? "rd" : "th")
    return result;
  }
)

const getHours = createSelector(getEntityState, (state: EntityState) => state.clock.dateTimeSetup.hourState.getCurrentValue());

const getMinutes = createSelector(getEntityState, (state: EntityState) => state.clock.dateTimeSetup.minuteState.getCurrentValue());

const getDateTime = createSelector(
  getYear,getMonth,getDay,getHours,getMinutes,
  (year, month, day, hours, minutes) => {
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
);

@Injectable()
export class ClockSetupSelectors {
  constructor(private store: Store<EntityState>) { }
  year$ = this.store.select(getYear);
  month$ = this.store.select(getMonth);
  day$ = this.store.select(getDay);
  hours$ = this.store.select(getHours);
  minutes$ = this.store.select(getMinutes);
  dateTime$ = this.store.select(getDateTime);
}