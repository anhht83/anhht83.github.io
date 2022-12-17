import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', async () => {
  await act(() => render(<App />));
});
