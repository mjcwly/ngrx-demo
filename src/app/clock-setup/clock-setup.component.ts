import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-setup',
  templateUrl: './clock-setup.component.html',
  styleUrls: ['./clock-setup.component.scss']
})
export class ClockSetupComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onLeftButtonClicked() {
    console.log("Left Button Clicked");
  }

  onSetButtonClicked() {
    console.log("Set Button Clicked");
  }

  onRightButtonClicked() {
    console.log("Right Button Clicked");
  }
}
