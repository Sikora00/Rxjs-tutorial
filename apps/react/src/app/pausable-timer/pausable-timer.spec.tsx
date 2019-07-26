import React from 'react';
import { render, cleanup } from '@testing-library/react';

import PausableTimer from './pausable-timer';

describe(' PausableTimer', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<PausableTimer />);
    expect(baseElement).toBeTruthy();
  });
});
