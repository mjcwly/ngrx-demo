import { createFeatureSelector, createSelector, Store } from "@ngrx/store";
import { EntityState } from "../reducers";
import { Injectable } from "@angular/core";

const getEntityState = createFeatureSelector<EntityState>('entityCache');

const getYear = createSelector(getEntityState, (state: EntityState) => state.clockSetup.dateTimeSetup.getYearState().selectedValue);
const getMonth = createSelector(getEntityState, (state: EntityState) => state.clockSetup.dateTimeSetup.getMonthState().selectedValue);
const getDay = createSelector(getEntityState, (state: EntityState) => state.clockSetup.dateTimeSetup.getDayState().selectedValue);
const getHours = createSelector(getEntityState, (state: EntityState) => state.clockSetup.dateTimeSetup.getHourState().selectedValue);
const getMinutes = createSelector(getEntityState, (state: EntityState) => state.clockSetup.dateTimeSetup.getMinuteState().selectedValue);
const getInstructions = createSelector(getEntityState, (state: EntityState) => state.clockSetup.dateTimeSetup.getCurrentState().instructions);

const getDateTime = createSelector(
  getYear, getMonth, getDay, getHours, getMinutes,
  (year, month, day, hours, minutes) => {
    const MM = ('0' + month).slice(-2);
    const dd = ('0' + day).slice(-2);
    const hh = ('0' + hours).slice(-2);
    const mm = ('0' + minutes).slice(-2);
    return `${year}-${MM}-${dd} ${hh}:${mm}`;
  }
);

@Injectable()
export class ClockSetupSelectors {
  constructor(private store: Store<EntityState>) {}
  dateTime$ = this.store.select(getDateTime);
  year$ = this.store.select(getYear);
  month$ = this.store.select(getMonth);
  day$ = this.store.select(getDay);
  hours$ = this.store.select(getHours);
  minutes$ = this.store.select(getMinutes);
  instructions$ = this.store.select(getInstructions);
}