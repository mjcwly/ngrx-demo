export interface IDateTimeSetupState {
  getCurrentValue: () => number;
  previousValue: () => void;
  selectValue: () => void;
  nextValue: () => void;
}

export class YearState implements IDateTimeSetupState {
  private context: DateTimeSetup;
  private currentValue: number;

  constructor(context: DateTimeSetup) {
    this.context = context;
    this.currentValue = new Date().getFullYear();
  }

  getCurrentValue(): number {
    return this.currentValue;
  }

  previousValue(): void {
    this.currentValue--;
  }

  selectValue() {
    this.context.currentState = this.context.monthState;
  }

  nextValue(): void {
    this.currentValue++;
  }
}

export class MonthState implements IDateTimeSetupState {
  private context: DateTimeSetup;
  private currentValue: number;

  constructor(context: DateTimeSetup) {
    this.context = context;
    this.currentValue = new Date().getMonth() + 1;
  }

  getCurrentValue(): number {
    return this.currentValue;
  }

  previousValue(): void {
    this.currentValue--;
  }

  selectValue() {
    this.context.currentState = this.context.dayState;
  }

  nextValue(): void {
    this.currentValue++;
  }
}

export class DayState implements IDateTimeSetupState {
  private context: DateTimeSetup;
  private currentValue: number;

  constructor(context: DateTimeSetup) {
    this.context = context;
    this.currentValue = new Date().getDate();
  }

  getCurrentValue(): number {
    return this.currentValue;
  }

  previousValue(): void {
    this.currentValue--;
  }

  selectValue() {
    this.context.currentState = this.context.hourState;
  }

  nextValue(): void {
    this.currentValue++;
  }
}

export class HourState implements IDateTimeSetupState {
  private context: DateTimeSetup;
  private currentValue: number;

  constructor(context: DateTimeSetup) {
    this.context = context;
    this.currentValue = new Date().getHours();
  }

  getCurrentValue(): number {
    return this.currentValue;
  }

  previousValue(): void {
    this.currentValue--;
  }

  selectValue() {
    this.context.currentState = this.context.minuteState;
  }

  nextValue(): void {
    this.currentValue++;
  }
}

export class MinuteState implements IDateTimeSetupState {
  private context: DateTimeSetup;
  private currentValue: number;

  constructor(context: DateTimeSetup) {
    this.context = context;
    this.currentValue = new Date().getMinutes();
  }

  getCurrentValue(): number {
    return this.currentValue;
  }

  previousValue(): void {
    this.currentValue--;
  }

  selectValue() {
    this.context.currentState = this.context.yearState;
  }

  nextValue(): void {
    this.currentValue++;
  }
}

export class DateTimeSetup {
  yearState: YearState;
  monthState: MonthState;
  dayState: DayState;
  hourState: HourState;
  minuteState: MinuteState;
  currentState: IDateTimeSetupState;

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