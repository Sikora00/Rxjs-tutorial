import React from 'react';

import './app.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Welcome from './welcome/welcome';
import ProgressBar from './progress-bar/progress-bar';

export const App = () => {
  return (
    <div>
      <Route path="/" exact render={() => <Welcome />} />
      <Route path="/1" exact render={() => <ProgressBar />} />
    </div>
  );
};

export default App;
