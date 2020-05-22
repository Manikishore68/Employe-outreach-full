import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-outreach',
  templateUrl: './employee-outreach.component.html',
  styleUrls: ['./employee-outreach.component.css']
})
export class EmployeeOutreachComponent implements OnInit {
  public currentDate = new Date().toLocaleString();
  constructor() { }

  ngOnInit(): void {
  }

}
