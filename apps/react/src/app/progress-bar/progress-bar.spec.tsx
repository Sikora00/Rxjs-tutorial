import React from 'react';
import { render, cleanup } from '@testing-library/react';

import ProgressBar from './progress-bar';

describe(' ProgressBar', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ProgressBar />);
    expect(baseElement).toBeTruthy();
  });
});
