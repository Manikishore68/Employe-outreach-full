import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeeOutreachComponent } from './employee-outreach/employee-outreach.component';
import { AttendenceTrackerComponent } from './attendence-tracker/attendence-tracker.component';
import { ActivityTimerComponent } from './activity-timer/activity-timer.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EmployeeOutreachComponent,
    AttendenceTrackerComponent,
    ActivityTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
