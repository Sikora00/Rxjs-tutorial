import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

import './welcome.scss';

/* tslint:disable:no-empty-interface */
export interface WelcomeProps {}

export class Welcome extends Component<WelcomeProps> {
  render() {
    return (
      <div className="welcome__container">
        <h1>Welcome to Rxjs tutorial!</h1>
        <img
          width="450"
          src="https://rxjs-dev.firebaseapp.com/generated/images/marketing/home/Rx_Logo-512-512.png"
        />

        <h2>Start with the fallowing articles</h2>
        <ul>
          <li>
            <a href="https://angularfirebase.com/lessons/rxjs-quickstart-with-20-examples/">
              Basics
            </a>
          </li>
          <li>
            <a href="https://blog.hackages.io/rxjs-5-5-piping-all-the-things-9d469d1b3f44">
              Pipe
            </a>
          </li>
          <li>
            <a href="https://reactive.how/">Reactive how</a>
          </li>
        </ul>

        <h2>Then go through the tasks</h2>
        <ol>
        <li>
            <Link to="1">Progress Bar</Link>
          </li>
          <li>
            <Link to="2">Pausable Timer</Link>
          </li>
          <li>
            <Link to="3">Posts</Link>
          </li>
          <li>
            <Link to="4">Posts With Comments</Link>
          </li>
        </ol>
      </div>
    );
  }
}

export default Welcome;
