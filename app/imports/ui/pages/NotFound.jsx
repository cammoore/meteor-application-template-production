import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PAGE_IDS } from '../utilities/PageIDs';

/** Render a Not Found page if the user enters a URL that doesn't match any route. */
const NotFound = () => (
  <Container id={PAGE_IDS.NOT_FOUND}>
    <Row className="justify-content-center">
      <Col xs={4} className="text-center">
        <h2>
          <p>Page not found</p>
        </h2>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
