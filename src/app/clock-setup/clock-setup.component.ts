import { Component, OnInit } from '@angular/core';
import { ClockSetupDispatchers } from '../store/services/clock-setup.dispatchers';
import { ClockSetupSelectors } from '../store/services/clock-setup.selectors';
import { Observable } from 'rxjs';
import { ClockSetupMode } from '../store/reducers/clock-setup.reducer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-clock-setup',
  templateUrl: './clock-setup.component.html',
  styleUrls: ['./clock-setup.component.scss']
})
export class ClockSetupComponent implements OnInit {

  dateTime$: Observable<string>;
  mode$: Observable<ClockSetupMode>;
  year$: Observable<number>;
  month$: Observable<string>;
  day$: Observable<string>;
  hours$: Observable<number>;
  minutes$: Observable<number>;

  constructor(
    private clockSetupDispatchers: ClockSetupDispatchers,
    private clockSetupSelectors: ClockSetupSelectors
  ) {
    this.dateTime$ = this.clockSetupSelectors.dateTime$;
    this.year$ = this.clockSetupSelectors.year$;
    this.month$ = this.clockSetupSelectors.month$;
    this.day$ = this.clockSetupSelectors.day$;
    this.hours$ = this.clockSetupSelectors.hours$;
    this.minutes$ = this.clockSetupSelectors.minutes$;
    this.mode$ = this.clockSetupSelectors.mode$;
  }

  ngOnInit() { }

  onLeftButtonClicked() {
    console.log("Left Button Clicked");
    this.clockSetupDispatchers.previousValue();
  }

  onSetButtonClicked() {
    console.log("Set Button Clicked");
    this.clockSetupDispatchers.selectValue();
  }

  onRightButtonClicked() {
    console.log("Right Button Clicked");
    this.clockSetupDispatchers.nextValue();
  }
}
