import React from 'react';
import PropTypes from 'prop-types';
import moviePlaceholder from '../../assets/images/movie-placeholder.png';

const Image = ({ src = '', className = '', placeholder = '' }) => {
  let imgPath = src;
  if (!src || src.toUpperCase() === 'N/A') {
    imgPath = placeholder || moviePlaceholder;
  }
  return (
    <div
      style={{ backgroundImage: `url(${imgPath})` }}
      className={`${className} cover-img bg-light`}>
      <img src={imgPath} className="w-100 invisible" />
    </div>
  );
};
Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default Image;
