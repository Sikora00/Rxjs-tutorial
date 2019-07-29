import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { pausableInterval } from '@rxjs-tutorial/solutions';

@Component({
  selector: 'rxjs-tutorial-pausable-timer',
  templateUrl: './pausable-timer.stage.component.html',
  styleUrls: ['./pausable-timer.stage.component.css']
})
export class PausableTimerStageComponent implements OnInit {
  timer: number;
  paused = false;
  constructor() {}

  ngOnInit() {
    // Emit counter like values (interval) but stop and resume on spacebar click (paused property)
    // Solution:
    // const source$ = pausableInterval.bind(this)();
    const source$ = of(0);
    source$.subscribe((value: number) => (this.timer = value));
  }
}
