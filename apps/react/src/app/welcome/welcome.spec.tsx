import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Welcome from './welcome';

describe(' Welcome', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Welcome />);
    expect(baseElement).toBeTruthy();
  });
});
