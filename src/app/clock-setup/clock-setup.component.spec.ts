import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockSetupComponent } from './clock-setup.component';

describe('ClockSetupComponent', () => {
  let component: ClockSetupComponent;
  let fixture: ComponentFixture<ClockSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
