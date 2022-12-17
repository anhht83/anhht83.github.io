import { render } from '@testing-library/react';
import DefaultLayout from '../DefaultLayout';
import { BrowserRouter } from 'react-router-dom';
it('renders without crashing', () => {
  render(
    <BrowserRouter>
      <DefaultLayout />
    </BrowserRouter>
  );
});
