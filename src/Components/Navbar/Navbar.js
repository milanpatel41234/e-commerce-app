import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Badge } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from '../Store/Cart-Context';
import { NavLink , Link} from 'react-router-dom';
import AuthContext from '../Store/AuthContext';
function HeaderNavbar(props) {
 
  const Authctx = useContext(AuthContext)
  const {items} = useContext(CartContext);
  const quantity = items.reduce((curNum ,item)=>{
    return (curNum + item.quantity)
  },0)
  
  return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container >
          <Nav className="me-auto" >
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="store">Store</Nav.Link>
            <Nav.Link href="about" >About</Nav.Link> */}
           <h4><NavLink className='mx-5' to='/home'><i>Home</i></NavLink></h4> 
           <h4><Link className='mx-5' to='/store'><i>Store</i></Link></h4> 
           <h4><Link className='mx-5' to='/about'><i>About</i></Link></h4> 
          </Nav>
           <Link className='mx-2' to='/contactUs'><i>Contact Us</i></Link>
           {!Authctx.loginState && <Link className='mx-2' to='/login'>Login</Link>}
           {Authctx.loginState && <Button variant="secondary" className='mx-2' onClick={Authctx.setlogout} >Logout</Button>}
          <Button onClick={props.onClick} variant="outline-info" style={{float:'right'}}>Cart<Badge bg="light" text="dark">{quantity}</Badge></Button>
        </Container>
      </Navbar>
  );
}

export default HeaderNavbar;