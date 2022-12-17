import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const Info = ({ movie }) => {
  return (
    <>
      {movie.Genre && (
        <p>
          {movie.Genre.split(',').map((Genre) => (
            <span key={Genre} className="badge rounded-pill text-bg-light me-2">
              {Genre}
            </span>
          ))}
        </p>
      )}
      <p>{movie.Plot}</p>
      <p>
        <span className="fw-bold me-2">Director</span> {movie.Director}
      </p>
      <p>
        <span className="fw-bold me-2">Writer</span> {movie.Writer}
      </p>
      <p>
        <span className="fw-bold me-2">Actors</span> {movie.Actors}
      </p>
      <p>
        <span className="fw-bold me-2">Awards</span> {movie.Awards}
      </p>
      <p>
        <span className="fw-bold me-2">Country</span> {movie.Country}
      </p>
      <Rating movie={movie} />
    </>
  );
};
Info.propTypes = {
  movie: PropTypes.object
};
export default Info;
