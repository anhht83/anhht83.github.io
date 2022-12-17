import { useInfiniteQuery, useQuery } from 'react-query';
import request from '../utils/request';

const apiKey = process.env.REACT_APP_OMDB_API_KEY;
const OMDbRoot = process.env.REACT_APP_OMDB_API_ROOT;

export const QUERY_MOVIES = 'apis/MovieApi/QUERY_MOVIES';
export const QUERY_MOVIE = 'apis/MovieApi/QUERY_MOVIE';

export const useQueryMovies = ({ s = '', type = 'movie' }, options = {}) => {
  const queries = [`apikey=${apiKey}`, `type=${type}`];
  // build queries
  if (s) queries.push(`s=${s}`);
  return useInfiniteQuery(
    [QUERY_MOVIES, { s, type }],
    ({ pageParam = 1 }) => request(`${OMDbRoot}/?${queries.join('&')}&page=${pageParam}`),
    {
      ...options,
      enabled: !!s, // stop searching if text search is empty
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.Response === 'True') return allPages.length + 1;
        return false;
      }
    }
  );
};

export const useQueryMovie = ({ id = '' }, options = {}) => {
  const queries = [`apikey=${apiKey}`];
  // build queries
  if (id) queries.push(`i=${id}`);
  options.enabled = !!id;

  return useQuery(
    [QUERY_MOVIE, { id }],
    () => request(`${OMDbRoot}/?${queries.join('&')}`),
    options
  );
};
