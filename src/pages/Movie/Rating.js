import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Rating = ({ movie }) => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <FontAwesomeIcon className="text-warning" icon={faStar} size="2x"></FontAwesomeIcon>
        <div className="mx-4 text-center">
          <div className="fw-bolder">IMDB RATING</div>
          <div>
            <span className="fw-bold">{movie.imdbRating}</span> / 10
          </div>
        </div>
        <div className="text-center">
          <div className="fw-bolder">VOTES</div>
          {movie.imdbVotes}
        </div>
      </div>
      {movie.Ratings && (
        <ul className="list-group list-group-flush">
          {movie.Ratings.map((Rating) => (
            <li
              key={Rating.Source}
              className="list-group-item list-group-item-dark d-flex justify-content-between align-items-center">
              {Rating.Source}
              <span className="badge bg-primary rounded-pill">{Rating.Value}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
Rating.propTypes = {
  movie: PropTypes.object
};
export default Rating;
