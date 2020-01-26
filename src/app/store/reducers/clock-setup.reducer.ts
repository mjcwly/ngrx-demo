import { Action, createReducer, on } from "@ngrx/store";
import * as ClockSetupActions from '../actions/clock-setup.actions';
 export interface IClockSetupState {
  getSelectedValue: () => number;
  previousValue: () => void;
  selectValue: () => void;
  nextValue: () => void;
}

export class YearState implements IClockSetupState {
  private context: ClockSetup;
  private val: number;

  constructor(context: ClockSetup) {
    this.context = context;
    this.val = new Date().getFullYear();
  }

  getSelectedValue(): number {
    return this.val;  
  }

  previousValue(): void {
    this.val--;
  }

  selectValue() {
    this.context.currentState = this.context.monthState;
  }

  nextValue(): void {
    this.val++;
  }
}

export class MonthState implements IClockSetupState {
  private context: ClockSetup;
  private val: number;

  constructor(context: ClockSetup) {
    this.context = context;
    this.val = new Date().getMonth() + 1;
  }

  getSelectedValue(): number {
    return this.val;  
  }

  previousValue(): void {
    this.val--;
  }

  selectValue() {
    this.context.currentState = this.context.dayState;
  }

  nextValue(): void {
    this.val++;
  }
}

export class DayState implements IClockSetupState {
  private context: ClockSetup;
  private val: number;

  constructor(context: ClockSetup) {
    this.context = context;
    this.val = new Date().getDate();
  }

  getSelectedValue(): number {
    return this.val;  
  }

  previousValue(): void {
    this.val--;
  }

  selectValue() {
    this.context.currentState = this.context.hourState;
  }

  nextValue(): void {
    this.val++;
  }
}
export class HourState implements IClockSetupState {
  private context: ClockSetup;
  private val: number;

  constructor(context: ClockSetup) {
    this.context = context;
    this.val = new Date().getHours();
  }

  getSelectedValue(): number {
    return this.val;  
  }

  previousValue(): void {
    this.val--;
  }

  selectValue() {
    this.context.currentState = this.context.minuteState;
  }

  nextValue(): void {
    this.val++;
  }
}

export class MinuteState implements IClockSetupState {
  private context: ClockSetup;
  private val: number;

  constructor(context: ClockSetup) {
    this.context = context;
    this.val = new Date().getMinutes();
  }

  getSelectedValue(): number {
    return this.val;  
  }

  previousValue(): void {
    this.val--;
  }

  selectValue() {
    this.context.currentState = this.context.yearState;
  }

  nextValue(): void {
    this.val++;
  }
}

export class ClockSetup {
  yearState: YearState;
  monthState: MonthState;
  dayState: DayState;
  hourState: HourState;
  minuteState: MinuteState;
  currentState: IClockSetupState;

  constructor() {
    this.yearState = new YearState(this);
    this.monthState = new MonthState(this);
    this.dayState = new DayState(this);
    this.hourState = new HourState(this);
    this.minuteState = new MinuteState(this);
    this.currentState = this.yearState;
  }

  previousValue(): void {
    this.currentState.previousValue();
  }

  selectValue() {
    this.currentState.selectValue();
  }

  nextValue(): void {
    this.currentState.nextValue();
  }
}


export interface ClockSetupState {
  clockSetup: ClockSetup
}

export const initialState = {
  clockSetup: new ClockSetup()
}

const clockSetupReducer = createReducer(
  initialState,

  on(ClockSetupActions.previousValue, state => {
    let newState = { ...state };
    newState.clockSetup.previousValue();
    return newState
  }),

  on(ClockSetupActions.selectValue, state => {
    let newState = { ...state };
    newState.clockSetup.selectValue();
    return newState
  }),

  on(ClockSetupActions.nextValue, state => {
    let newState = { ...state };
    newState.clockSetup.nextValue();
    return newState
  }),

);

export function reducer(state: ClockSetupState | undefined, action: Action) {
  return clockSetupReducer(state, action);
}


