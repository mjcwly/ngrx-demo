import { Action, createReducer, on } from "@ngrx/store";
import * as ClockActions from '../actions/clock-setup.actions';
import { DateTimeSetup } from "../state/date-time-setup";

export interface ClockState {
  dateTimeSetup: DateTimeSetup
}

export const initialState: ClockState = {
  dateTimeSetup: new DateTimeSetup()
}

const clockReducer = createReducer(
  initialState,

  on(ClockActions.previousValue, state => {
    let newState = { ...state };
    newState.dateTimeSetup.previousValue();
    return newState
  }),

  on(ClockActions.selectValue, state => {
    let newState = { ...state };
    newState.dateTimeSetup.selectValue();
    return newState
  }),

  on(ClockActions.nextValue, state => {
    let newState = { ...state };
    newState.dateTimeSetup.nextValue();
    return newState
  }),

);

export function reducer(state: ClockState | undefined, action: Action) {
  return clockReducer(state, action);
}


