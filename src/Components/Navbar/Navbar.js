import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Badge } from 'react-bootstrap';

function HeaderNavbar(props) {
  return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container >
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Store</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Button onClick={props.onClick} variant="outline-info" style={{float:'right'}}>Cart <Badge bg="light" text="dark">0</Badge></Button>
        </Container>
      </Navbar>
  );
}

export default HeaderNavbar;