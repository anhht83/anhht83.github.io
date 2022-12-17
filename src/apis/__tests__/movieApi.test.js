import { renderHook } from '@testing-library/react-hooks';
import { useQueryMovie, useQueryMovies } from '../movieApi';
import queryClient from '../queryClient';
import { QueryClientProvider } from 'react-query';
import React from 'react';
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
it('Test Infinite Scroll of fetching movies and fetch detail movie', async () => {
  const { result, waitFor } = renderHook(() => useQueryMovies({ s: 'marvel' }), { wrapper });
  await waitFor(() => result.current.isSuccess);
  expect(result.current.data.pages[0].Response).toEqual('True');

  result.current.fetchNextPage();
  await waitFor(() => result.current.isFetching);
  await waitFor(() => !result.current.isFetching);
  expect(result.current.data.pages[1].Response).toEqual('True');

  const testId = result.current.data.pages[0].Search[0].imdbID;
  const { result: resultDetail, waitFor: waitForDetail } = renderHook(
    () => useQueryMovie({ id: testId }),
    { wrapper }
  );
  await waitForDetail(() => resultDetail.current.isSuccess);
  expect(resultDetail.current.data.imdbID).toEqual(testId);
});
