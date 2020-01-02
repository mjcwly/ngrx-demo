import { Component, OnInit } from '@angular/core';
import { ClockSetupDispatchers } from '../store/services/clock-setup.dispatchers';

@Component({
  selector: 'app-clock-setup',
  templateUrl: './clock-setup.component.html',
  styleUrls: ['./clock-setup.component.scss']
})
export class ClockSetupComponent implements OnInit {

  constructor(
    private clockSetupDispatchers: ClockSetupDispatchers
  ) { }

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
