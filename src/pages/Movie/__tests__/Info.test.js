import React from 'react';
import { render } from '@testing-library/react';
import Info from '../Info';
it('renders without crashing', () => {
  render(<Info movie={{ imdbID: 1 }} />);
});
