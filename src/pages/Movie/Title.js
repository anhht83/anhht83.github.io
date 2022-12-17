import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const Title = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="d-flex align-items-center">
        <button onClick={() => navigate(-1)} className="btn btn-dark btn-sm me-2">
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> Back
        </button>
        {movie.Title}
      </h2>
      <ul className="list-inline">
        <li className="list-inline-item">{movie.Year}</li>
        <li className="list-inline-item">.</li>
        <li className="list-inline-item">{movie.Runtime}</li>
      </ul>
    </>
  );
};
Title.propTypes = {
  movie: PropTypes.object
};
export default Title;
