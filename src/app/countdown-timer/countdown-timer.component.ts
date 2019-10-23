import { Component, OnInit , Input, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private  intervalId = 0;
  message = '';
  remainingTime = 11;
  @Input()
  seconds = 11;
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  clearTimer() {}

  start() {
    if (this.remainingTime > 0) {
      setInterval( () => {
        this.remainingTime -= this.remainingTime;
      }, 1000);
    }
    this.message = 'Click start button to start Countdown.';
  }

  stop() {}

  reset() {}

  private countDown() {}
}
