import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ message }) => (<Container>
  <Row className="justify-content-md-center"><Spinner animation="border"/>{message || 'Getting data'}</Row>
</Container>);

LoadingSpinner.propTypes = {
  message: PropTypes.string,
};

export default LoadingSpinner;
