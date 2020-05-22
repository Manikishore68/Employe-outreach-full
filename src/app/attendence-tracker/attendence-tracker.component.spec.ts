import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendenceTrackerComponent } from './attendence-tracker.component';

describe('AttendenceTrackerComponent', () => {
  let component: AttendenceTrackerComponent;
  let fixture: ComponentFixture<AttendenceTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendenceTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendenceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
