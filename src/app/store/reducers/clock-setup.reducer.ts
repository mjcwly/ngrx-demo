import { Action, createReducer, on } from "@ngrx/store";
import * as ClockSetupActions from '../actions/clock-setup.actions';

export interface ClockSetupState {
  day: number,
  month: number,
  year: number,
  hours: number,
  minutes: number,
  mode: number,
  instructions: string
}

const modeInstructions = {
  0: "Please set the Year",
  1: "Please set the Month",
  2: "Please set the Day",
  3: "Please set the Hours",
  4: "Please set the Minutes",
}

export const initialState: ClockSetupState = {
  day: new Date().getDate(),
  month: new Date().getMonth() + 1,
  year: new Date().getFullYear(),
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  mode: 0,
  instructions: modeInstructions[0]
};

const clockSetupReducer = createReducer(
  initialState,

  on(ClockSetupActions.previousValue, state => {
    let newState = { ...state };
    if (state.mode === 0) newState.year--;
    if (state.mode === 1) newState.month--;
    if (state.mode === 2) newState.day--;
    if (state.mode === 3) newState.hours--;
    if (state.mode === 4) newState.minutes--;
    return newState
  }),

  on(ClockSetupActions.selectValue, state => {
    let newState = { ...state };
    newState.mode++;
    newState.instructions = modeInstructions[newState.mode];
    if (newState.mode === 5) {
      newState.mode = 0;
      newState.instructions = modeInstructions[0];
    }
    return newState
  }),

  on(ClockSetupActions.nextValue, state => {
    let newState = { ...state };
    if (state.mode === 0) newState.year++;
    if (state.mode === 1) newState.month++;
    if (state.mode === 2) newState.day++;
    if (state.mode === 3) newState.hours++;
    if (state.mode === 4) newState.minutes++;
    return newState
  }),

);

export function reducer(state: ClockSetupState | undefined, action: Action) {
  return clockSetupReducer(state, action);
}
