import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-timer',
  templateUrl: './activity-timer.component.html',
  styleUrls: ['./activity-timer.component.css']
})
export class ActivityTimerComponent implements OnInit {
  public currentDate = new Date().toLocaleString();
  constructor() { }

  ngOnInit(): void {
    setInterval(this.currentDate,1000);
  }

}
