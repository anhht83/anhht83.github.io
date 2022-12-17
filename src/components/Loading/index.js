import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ loadingMessage = 'Loading ...' }) => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">{loadingMessage}</span>
  </Spinner>
);
Loading.propTypes = {
  loadingMessage: PropTypes.string
};

export default Loading;
