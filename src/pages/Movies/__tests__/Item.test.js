import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Item from '../Item';
it('renders without crashing', () => {
  render(
    <BrowserRouter>
      <Item movie={{ imdbID: 1 }} />
    </BrowserRouter>
  );
});
