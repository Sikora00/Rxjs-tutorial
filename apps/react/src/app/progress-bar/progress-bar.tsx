import React, { Component } from 'react';
import { timer, concat, of } from 'rxjs';
import { Route, Link } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import { progressBar } from '@rxjs-tutorial/solutions';

import './progress-bar.scss';
import { Button } from '@material-ui/core';

/* tslint:disable:no-empty-interface */
export interface ProgressBarProps {}
export interface ProgressBarState {
  value: number;
  success: boolean;
}

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

export class ProgressBar extends Component<ProgressBarProps, ProgressBarState> {
  constructor(props) {
    super(props);
    this.state = { value: 0, success: false };
  }

  componentDidMount() {
    // ToDo create your own observable to resolve the task
    const source$ = of();
    // Soultion:
    // const source$ = progressBar();

    source$.subscribe((value: number) => {
      this.setState({ value: value });
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
        firstCheck = this.state.value > 0 && this.state.value < 100;
      }
      if (testIteration === 2) {
        secondCheck = this.state.value === 100;
        this.setState({ success: firstCheck && secondCheck });
      }
    });
  }
  render() {
    return (
      <div>
        <h2>Fill this progress bar in 5s</h2>
        <LinearProgress variant="determinate" value={this.state.value} />
        <Button disabled={!this.state.success} component={AdapterLink} to="/2">
          Next
        </Button>
      </div>
    );
  }
}

export default ProgressBar;
