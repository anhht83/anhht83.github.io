import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useQueryMovies } from '../../apis/movieApi';
import Loading from '../../components/Loading';
import List from './List';
import Error from '../../components/Error';

const Movies = () => {
  // parse text search via query url
  const [searchParams] = useSearchParams();
  // handle the item where should trigger to fetch the next page
  const { ref, inView } = useInView();
  const { data, isFetching, isError, error, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useQueryMovies({
      s: searchParams.get('txtSearch')
    });

  useEffect(() => {
    // fetch next page when scrolldown to the bottom
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  // show error if request is failed
  if (isError) return <Error show={true} errorMessage={error.message} />;

  return (
    <>
      <section className="py-4">
        <h3>Search: {searchParams.get('txtSearch')}</h3>
        {data && <div>Total {data.pages[0].totalResults || 0} results</div>}
      </section>
      {data && (
        <List
          movies={data.pages.reduce((movies, page) => {
            return [...movies, ...(page.Search || [])];
          }, [])}
        />
      )}
      {/* element to handle scroll to the bottom to trigger fetch the next page*/}
      {(isFetching || hasNextPage) && !isFetchingNextPage && (
        <div ref={ref} className="text-center py-5">
          <Loading />
        </div>
      )}
    </>
  );
};
export default Movies;
