import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rxjs-tutorial-next-stage-button',
  templateUrl: './next-stage-button.component.html',
  styleUrls: ['./next-stage-button.component.css']
})
export class NextStageButtonComponent implements OnInit {
  @Input()
  stage: number;
  constructor() {}

  ngOnInit() {}
}
