import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ message }) => (<Container>
  <Row className="justify-content-md-center"><Spinner animation="border"/>{message || 'Getting data'}</Row>
</Container>);

LoadingSpinner.propTypes = {
  message: PropTypes.string,
};

export default LoadingSpinner;
