import { createAction } from '@ngrx/store';

export const previousValue = createAction('[ClockSetup] PREVIOUS_VALUE');

export const selectValue = createAction('[ClockSetup] SELECT_VALUE');

export const nextValue = createAction('[ClockSetup] NEXT_VALUE');