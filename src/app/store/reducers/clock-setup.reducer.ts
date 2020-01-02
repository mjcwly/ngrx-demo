import { Action, createReducer, on } from "@ngrx/store";
import * as ClockSetupActions from '../actions/clock-setup.actions';

export interface ClockSetupState {
  dateTimeSetup: DateTimeSetup
}

export class DateTimeSetup {
  private yearState: DateTimeSetupState;
  private monthState: DateTimeSetupState;
  private dayState: DateTimeSetupState;
  private hourState: DateTimeSetupState;
  private minuteState: DateTimeSetupState;
  private currentState: DateTimeSetupState;

  constructor() {
    console.log("DateTimeSetup Constructor");
    this.yearState = new YearSetupState(this);
    this.monthState = new MonthSetupState(this);
    this.dayState = new DaySetupState(this);
    this.hourState = new HourSetupState(this);
    this.minuteState = new MinuteSetupState(this);
    this.currentState = this.yearState;
  }

  previousValue = () => this.currentState.previousValue();

  selectValue = () => {
    this.currentState.selectValue();
  }

  nextValue = () => this.currentState.nextValue();
  setCurrentState = (state: DateTimeSetupState) => this.currentState = state;
  getYearState = () => this.yearState;
  getMonthState = () => this.monthState;
  getDayState = () => this.dayState;
  getHourState = () => this.hourState;
  getMinuteState = () => this.minuteState;
  getCurrentState = () => this.currentState;
}

export interface DateTimeSetupState {
  instructions: string;
  selectedValue: number;
  previousValue(): void;
  selectValue(): void;
  nextValue(): void;
}

export class YearSetupState implements DateTimeSetupState {

  instructions: string;
  selectedValue: number;
  dateTimeSetup: DateTimeSetup;

  previousValue(): void {
    this.selectedValue--;
  }

  selectValue(): void { 
    console.log("Year set to " + this.selectedValue);
    this.dateTimeSetup.setCurrentState(this.dateTimeSetup.getMonthState());
  }

  nextValue(): void {
    this.selectedValue++;
  }

  constructor(dateTimeSetup: DateTimeSetup) {
    console.log("YearSetupState Constructor");
    this.dateTimeSetup = dateTimeSetup;
    this.selectedValue = 2020;
    this.instructions = "Set the Year...";
  }
}

export class MonthSetupState implements DateTimeSetupState {

  instructions: string;
  selectedValue: number;
  dateTimeSetup: DateTimeSetup;

  previousValue(): void {
    this.selectedValue--;
  }

  selectValue(): void {
    console.log("Month set to " + this.selectedValue);
    this.dateTimeSetup.setCurrentState(this.dateTimeSetup.getDayState());
  }

  nextValue(): void {
    this.selectedValue++;
  }

  constructor(dateTimeSetup: DateTimeSetup) {
    console.log("MonthSetupState Constructor");
    this.dateTimeSetup = dateTimeSetup;
    this.selectedValue = 1;
    this.instructions = "Set the Month...";
  }
}

export class DaySetupState implements DateTimeSetupState {

  instructions: string;
  selectedValue: number;
  dateTimeSetup: DateTimeSetup;

  previousValue(): void {
    this.selectedValue--;
  }

  selectValue(): void {
    console.log("Day set to " + this.selectedValue);
    this.dateTimeSetup.setCurrentState(this.dateTimeSetup.getHourState());
  }

  nextValue(): void {
    this.selectedValue++;
  }

  constructor(dateTimeSetup: DateTimeSetup) {
    console.log("DaySetupState Constructor");
    this.dateTimeSetup = dateTimeSetup;
    this.selectedValue = 10;
    this.instructions = "Set the Day...";
  }
}

export class HourSetupState implements DateTimeSetupState {

  instructions: string;
  selectedValue: number;
  dateTimeSetup: DateTimeSetup;

  previousValue(): void {
    this.selectedValue--;
  }

  selectValue(): void {
    console.log("Hours set to " + this.selectedValue);
    this.dateTimeSetup.setCurrentState(this.dateTimeSetup.getMinuteState());
  }

  nextValue(): void {
    this.selectedValue++;
  }

  constructor(dateTimeSetup: DateTimeSetup) {
    console.log("HourSetupState Constructor");
    this.dateTimeSetup = dateTimeSetup;
    this.selectedValue = 12;
    this.instructions = "Set the Hours...";
  }
}

export class MinuteSetupState implements DateTimeSetupState {

  instructions: string;
  selectedValue: number;
  dateTimeSetup: DateTimeSetup;

  previousValue(): void {
    this.selectedValue--;
  }

  selectValue(): void {
    console.log("Minutes set to " + this.selectedValue);
    this.dateTimeSetup.setCurrentState(this.dateTimeSetup.getYearState());
  }

  nextValue(): void {
    this.selectedValue++;
  }

  constructor(dateTimeSetup: DateTimeSetup) {
    console.log("MinuteSetupState Constructor");
    this.dateTimeSetup = dateTimeSetup;
    this.selectedValue = 30;
    this.instructions = "Set the Minutes...";
  }
}

export const initialState: ClockSetupState = {
  dateTimeSetup: new DateTimeSetup()
};

const clockSetupReducer = createReducer(
  initialState,

  on(ClockSetupActions.previousValue, state => {
    let newState = { ...state };
    newState.dateTimeSetup.previousValue();
    return newState
  }),

  on(ClockSetupActions.selectValue, state => {
    let newState = { ...state };
    newState.dateTimeSetup.selectValue();
    return newState
  }),

  on(ClockSetupActions.nextValue, state => {
    let newState = { ...state };
    newState.dateTimeSetup.nextValue();
    return newState
  }),

);

export function reducer(state: ClockSetupState | undefined, action: Action) {
  return clockSetupReducer(state, action);
}
