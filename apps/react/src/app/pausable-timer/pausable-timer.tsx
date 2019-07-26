import React, { Component } from 'react';

import './pausable-timer.css';
import { pausableInterval } from '@rxjs-tutorial/solutions';

/* tslint:disable:no-empty-interface */
export interface PausableTimerProps {}
export interface PausableTimerState {
  timer: number;
}
export class PausableTimer extends Component<
  PausableTimerProps,
  PausableTimerState
> {
  paused: false;
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
  }
  componentDidMount() {
    // ToDo fill the timer property to correctly display the pausable timer
    pausableInterval
      .bind(this)()
      .subscribe((value: number) => this.setState({ timer: value }));
  }

  render() {
    return (
      <div>
        <h2>Display timer pausable by spacebar</h2>
        <p>{this.state.timer}</p>
      </div>
    );
  }
}

export default PausableTimer;
