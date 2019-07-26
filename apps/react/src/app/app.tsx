import React from 'react';

import './app.scss';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Root</Link>
        </li>
      </ul>
      <header style={{ textAlign: 'center' }}>
        <h1>Welcome to react!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
        />
      </header>
      <p>
        This is a React app built with <a href="https://nx.dev/react">Nx</a>.
      </p>
      <p>🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**</p>
      <h2>Quick Start & Documentation</h2>
      <ul>
        <li>
          <a href="https://nx.dev/react/getting-started/what-is-nx">
            10-minute video showing all Nx features
          </a>
        </li>
        <li>
          <a href="https://nx.dev/react/tutorial/01-create-application">
            Interactive tutorial
          </a>
        </li>
      </ul>
      <Route path="/" exact render={() => <div>This is the root route.</div>} />
    </div>
  );
};

export default App;
