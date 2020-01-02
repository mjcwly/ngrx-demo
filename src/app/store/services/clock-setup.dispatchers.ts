import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ClockSetupActions from '../actions/clock-setup.actions';
import { EntityState } from '../reducers';

@Injectable()
export class ClockSetupDispatchers {
  constructor(private store: Store<EntityState>) {}

  previousValue() {
    this.store.dispatch(ClockSetupActions.previousValue());
  }

  selectValue() {
    this.store.dispatch(ClockSetupActions.selectValue());
  }

  nextValue() {
    this.store.dispatch(ClockSetupActions.nextValue());
  }
}
