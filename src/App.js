import React, { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import queryClient from './apis/queryClient';
import { QueryClientProvider } from 'react-query';

const DefaultLayout = lazy(() => import('./layouts/DefaultLayout'));
const Movies = lazy(() => import('./pages/Movies'));
const Movie = lazy(() => import('./pages/Movie'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<Movies />} />
              <Route path="/:id" element={<Movie />} />
            </Route>
          </Routes>
        </HashRouter>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
