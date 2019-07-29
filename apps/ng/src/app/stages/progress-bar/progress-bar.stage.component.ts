import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { progressBar } from '@rxjs-tutorial/solutions';

@Component({
  selector: 'rxjs-tutorial-progress-bar',
  templateUrl: './progress-bar.stage.component.html',
  styleUrls: ['./progress-bar.stage.component.css']
})
export class ProgressBarStageComponent implements OnInit {
  value = 0;
  success = false;
  constructor() {}

  ngOnInit() {
    // Emit events from source$ from 0 to 100 within 5 seconds
    const source$ = of();
    // Soultion:
    // const source$ = progressBar();

    source$.subscribe((value: number) => {
      this.value = value;
    });
  }
}
