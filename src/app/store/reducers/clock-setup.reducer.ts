import { Action, createReducer, on } from "@ngrx/store";
import * as ClockSetupActions from '../actions/clock-setup.actions';

export enum ClockSetupMode { Default, SetYear, SetMonth, SetDay, SetHours, SetMinutes };

export interface ClockSetupState {
  day: number,
  month: number,
  year: number,
  hours: number,
  minutes: number,
  mode: ClockSetupMode
}

export const initialState: ClockSetupState = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  mode: ClockSetupMode.Default
};

const clockSetupReducer = createReducer(
  initialState,

  on(ClockSetupActions.previousValue, state => {
    let newState = { ...state };
    if (state.mode === ClockSetupMode.SetYear) newState.year--;
    if (state.mode === ClockSetupMode.SetMonth) newState.month--;
    if (state.mode === ClockSetupMode.SetDay) newState.day--;
    if (state.mode === ClockSetupMode.SetHours) newState.hours--;
    if (state.mode === ClockSetupMode.SetMinutes) newState.minutes--;
    return newState
  }),

  on(ClockSetupActions.selectValue, state => {
    let newState = { ...state };
    if (state.mode === ClockSetupMode.Default) newState.mode = ClockSetupMode.SetYear;
    if (state.mode === ClockSetupMode.SetYear) newState.mode = ClockSetupMode.SetMonth;
    if (state.mode === ClockSetupMode.SetMonth) newState.mode = ClockSetupMode.SetDay;
    if (state.mode === ClockSetupMode.SetDay) newState.mode = ClockSetupMode.SetHours;
    if (state.mode === ClockSetupMode.SetHours) newState.mode = ClockSetupMode.SetMinutes;
    if (state.mode === ClockSetupMode.SetMinutes) newState.mode = ClockSetupMode.Default;
    return newState
  }),

  on(ClockSetupActions.nextValue, state => {
    let newState = { ...state };
    if (state.mode === ClockSetupMode.SetYear) newState.year++;
    if (state.mode === ClockSetupMode.SetMonth) newState.month++;
    if (state.mode === ClockSetupMode.SetDay) newState.day++;
    if (state.mode === ClockSetupMode.SetHours) newState.hours++;
    if (state.mode === ClockSetupMode.SetMinutes) newState.minutes++;
    return newState
  }),

);

export function reducer(state: ClockSetupState | undefined, action: Action) {
  return clockSetupReducer(state, action);
}


