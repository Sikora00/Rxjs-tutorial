import React, { Component } from 'react';
import { timer, concat, of } from 'rxjs';
import LinearProgress from '@material-ui/core/LinearProgress';
import { progressBar } from '@rxjs-tutorial/solutions';

import './progress-bar.scss';
import { Button } from '@material-ui/core';
import AdapterLink from '../../components/adapter-link';
import NextStageButton from '../../components/next-stage-button/next-stage-button';

/* tslint:disable:no-empty-interface */
export interface ProgressBarProps {}
export interface ProgressBarState {
  value: number;
}

export class ProgressBar extends Component<ProgressBarProps, ProgressBarState> {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  componentDidMount() {
    // Emit events from source$ from 0 to 100 within 5 seconds
    const source$ = of();
    // Soultion:
    // const source$ = progressBar();

    source$.subscribe((value: number) => {
      this.setState({ value: value });
    });
  }

  render() {
    return (
      <div>
        <h5>Source component: apps/react/src/app/stages/progress-bar</h5>
        <h2>Fill this progress bar in 5s</h2>
        <LinearProgress variant="determinate" value={this.state.value} />
        <NextStageButton stage={2} />
      </div>
    );
  }
}

export default ProgressBar;
