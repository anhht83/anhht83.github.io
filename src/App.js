import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import queryClient from './apis/queryClient';
import { QueryClientProvider } from 'react-query';
import { ROUTES } from './constants/routes';

const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));
const Movies = lazy(() => import('./pages/Movies'));
const Movie = lazy(() => import('./pages/Movie'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.MOVIES} element={<DefaultLayout />}>
              <Route index element={<Movies />} />
              <Route path={ROUTES.MOVIE} element={<Movie />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
