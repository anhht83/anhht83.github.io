import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Error = ({ show = false, errorMessage = 'Error' }) => {
  const [isShow, setIsShow] = useState(show);
  const handleClose = () => setIsShow(false);
  return (
    <Modal
      variant="danger"
      show={isShow}
      backdrop="static"
      centered
      dialogClassName="modal-error"
      keyboard={false}>
      <Modal.Body className="text-center text-danger">{errorMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
Error.propTypes = {
  show: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default Error;
