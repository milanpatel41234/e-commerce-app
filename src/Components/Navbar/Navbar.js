import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../Store/Cart-Context';

function HeaderNavbar(props) {
  const {items} = useContext(CartContext);
  const quantity = items.reduce((curNum ,item)=>{
    return (curNum + item.quantity)
  },0)
  return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container >
          <Nav className="me-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
          <Button onClick={props.onClick} variant="outline-info" style={{float:'right'}}>Cart<Badge bg="light" text="dark">{quantity}</Badge></Button>
        </Container>
      </Navbar>
  );
}

export default HeaderNavbar;