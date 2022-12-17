import React from 'react';
import { render } from '@testing-library/react';
import Rating from '../Rating';
it('renders without crashing', () => {
  render(<Rating movie={{ imdbID: 1 }} />);
});
