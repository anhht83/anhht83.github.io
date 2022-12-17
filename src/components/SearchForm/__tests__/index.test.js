import { render } from '@testing-library/react';
import SearchForm from '../index';
import { BrowserRouter } from 'react-router-dom';
it('renders without crashing', () => {
  render(
    <BrowserRouter>
      <SearchForm />
    </BrowserRouter>
  );
});
