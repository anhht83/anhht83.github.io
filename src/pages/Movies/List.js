import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ movies }) => {
  return (
    <div className="movies">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {movies.map((movie) => (
          <div className="col" key={movie.imdbID}>
            <Item movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
List.propTypes = {
  movies: PropTypes.array
};
export default List;
