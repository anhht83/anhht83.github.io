import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import List from '../List';

it('renders without crashing', () => {
  render(
    <BrowserRouter>
      <List movies={[{ imdbID: 1 }]} />
    </BrowserRouter>
  );
});
