import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOutreachComponent } from './employee-outreach.component';

describe('EmployeeOutreachComponent', () => {
  let component: EmployeeOutreachComponent;
  let fixture: ComponentFixture<EmployeeOutreachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOutreachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOutreachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
