import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendence-tracker',
  templateUrl: './attendence-tracker.component.html',
  styleUrls: ['./attendence-tracker.component.css']
})
export class AttendenceTrackerComponent implements OnInit {
  public currentDate = new Date().toLocaleString();
  public primaryLocation:string[] = ['Work From Client Location','Working From Home','Working from Mphasis Office'];
  public familyFeeling:string[] = ['good','Not so good','Need help'];
  public wfh:string[] = ['Yes iam enabled to WFH','No-I dont have laptop/desktop','No-I dont have dongled internet connection',
    'No-Client approval pending for WFH','No-Desktop/laptop not working','No-Dongle not working','No-Internet not working' ];
  constructor() { }

  ngOnInit(): void {
  }

}
