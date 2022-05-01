import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { paddingTop: '15px' };
  return (
    <footer>
      <Container style={divStyle}>
        <Col className="text-center">
          <hr/>
          Department of Information and Computer Sciences <br/>
          University of Hawaii<br/>
          Honolulu, HI 96822 <br/>
          <a href="http://ics-software-engineering.github.io/meteor-application-template-react">Template Home Page</a></Col>
      </Container>
    </footer>
  );
};

export default Footer;
