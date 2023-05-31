import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto">
      <Container>
        <Row>
          <Col>
            <h5>Footer Title</h5>
            <p>Footer content goes here.</p>
          </Col>
         
          <Col>
            <h5>Contact</h5>
            <p>123 Street, City, State</p>
            <p>Email: info@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
