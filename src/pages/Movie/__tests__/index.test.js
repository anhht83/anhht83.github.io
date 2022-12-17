import { render } from '@testing-library/react';
import Movie from '../index';
import { BrowserRouter } from 'react-router-dom';
import queryClient from '../../../apis/queryClient';
import { QueryClientProvider } from 'react-query';
import React from 'react';
it('renders without crashing', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Movie />
      </BrowserRouter>
    </QueryClientProvider>
  );
});
