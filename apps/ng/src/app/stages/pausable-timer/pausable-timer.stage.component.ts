import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { pausableInterval } from '@rxjs-tutorial/solutions';
import { filter, startWith, tap, map } from 'rxjs/operators';

@Component({
  selector: 'rxjs-tutorial-pausable-timer',
  templateUrl: './pausable-timer.stage.component.html',
  styleUrls: ['./pausable-timer.stage.component.css']
})
export class PausableTimerStageComponent implements OnInit {
  timer: Observable<number>;
  paused = false;
  constructor() {}

  ngOnInit() {
    // ToDo fill the timer property to correctly display the pausable timer
    // this.timer = pausableInterval.bind(this)();
  }
}
