import React from 'react';
import PropTypes from 'prop-types';
import { generatePath, Link } from 'react-router-dom';
import Image from '../../components/Image';
const Item = ({ movie }) => {
  return (
    <div className="card shadow-sm h-100">
      <Image src={movie.Poster} className="movies-item-img card-img-top" />
      <div className="card-body w-100 d-flex flex-column justify-content-between">
        <div className="card-title h5">{movie.Title}</div>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={generatePath(':id', { id: movie.imdbID })} className="btn btn-sm btn-dark">
            View
          </Link>
          <small>{movie.Year}</small>
        </div>
      </div>
    </div>
  );
};
Item.propTypes = {
  movie: PropTypes.object
};
export default Item;
