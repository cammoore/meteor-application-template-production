import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <Container>
    <Row id='landing-page' className="align-middle text-center">
      <Col xs={4}>
        <Image roundedCircle src="/images/meteor-logo.png" width="150px"/>
      </Col>

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Welcome to this template</h1>
        <p>Now get to work and modify this app!</p>
      </Col>

    </Row>
  </Container>
);

export default Landing;
