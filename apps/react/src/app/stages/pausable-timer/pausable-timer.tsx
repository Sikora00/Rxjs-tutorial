import React, { Component } from 'react';

import './pausable-timer.css';
import { pausableInterval } from '@rxjs-tutorial/solutions';
import { of } from 'rxjs';
import NextStageButton from '../../components/next-stage-button/next-stage-button';

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
    // Emit counter like values (interval) but stop and resume on spacebar click (paused property)
    // Solution:
    // const source$ = pausableInterval.bind(this)()
    const source$ = of(0);
    source$.subscribe((value: number) => this.setState({ timer: value }));
  }

  render() {
    return (
      <div>
        <h5>Source component: apps/react/src/app/stages/pausable-timer</h5>
        <h2>Display timer pausable by spacebar</h2>
        <p>{this.state.timer}</p>
        <NextStageButton stage={3} />
      </div>
    );
  }
}

export default PausableTimer;
