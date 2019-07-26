import { Component, OnInit } from '@angular/core';
import { of, interval, timer, concat } from 'rxjs';
import { progressBar } from '@rxjs-tutorial/solutions';
import { takeUntil, startWith, map } from 'rxjs/operators';

@Component({
  selector: 'rxjs-tutorial-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  value = 0;
  success = false;
  constructor() {}

  ngOnInit() {
    // ToDo create your own observable to resolve the task
    const source$ = of();
    // Soultion:
    // const source$ = progressBar();

    source$.subscribe((value: number) => {
      this.value = value;
    });

    this.test();
  }

  test() {
    let testIteration = 0;
    let firstCheck = false;
    let secondCheck = false;
    concat(timer(4 * 1000), timer(2 * 1000)).subscribe(() => {
      testIteration++;
      if (testIteration === 1) {
        firstCheck = this.value > 0 && this.value < 100;
      }
      if (testIteration === 2) {
        secondCheck = this.value === 100;
        this.success = firstCheck && secondCheck;
      }
    });
  }
}
