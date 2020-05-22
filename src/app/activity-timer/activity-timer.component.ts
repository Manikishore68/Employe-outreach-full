import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-timer',
  templateUrl: './activity-timer.component.html',
  styleUrls: ['./activity-timer.component.css']
})
export class ActivityTimerComponent implements OnInit {
  public currentDate = new Date().toLocaleString();

  public count:number = 0;
  public minutes:number = 0;
  public seconds:number = 0;
  public milliseconds:number = 0;
  public interval;
  public isCounterRunning: boolean = false;

  // start the counter
  public start (){
    if(!this.isCounterRunning){
      this.interval = setInterval( () => {
        this.count++;
        this.minutes = Math.floor((this.count/100)/60);
        this.seconds = Math.floor((this.count/100) - (this.minutes*60));
        this.milliseconds = Math.floor((this.count) - (this.seconds*100) - (this.minutes*6000));
      },10);
      this.isCounterRunning = true;
    }
  }

      // stop counter
  public stopCounter(){
    clearInterval(this.interval);
    this.isCounterRunning = false;
  }
  // leadingZero
  public leadingZero(time:number):string{
    if(time <= 9){
      return '0' + time
    }
    else{
      return String(time);
    }
  }

  constructor() { }

  ngOnInit(): void {
    setInterval(this.currentDate,1000);


}

}

