import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Badge } from 'react-bootstrap';
import { NavLink , Link} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import  {AuthAction } from '../Redux-Store/index';
function HeaderNavbar(props) {
 
  const AuthState = useSelector(state => state.AuthSlice);
  const CartState = useSelector(state => state.CartSlice);
  const dispatch = useDispatch();
  const quantity = CartState.items.reduce((curNum ,item)=>{
    return (curNum + item.quantity)
  },0)
  const HandleLogout = () => {
    dispatch(AuthAction.setUserLogout())
  }
  return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container >
          <Nav className="me-auto" >
           <h4><NavLink className='mx-5' to='/productPage'>ProductsPage</NavLink></h4> 
           <h4><Link className='mx-5' to='/about'>About Us</Link></h4> 
          </Nav>
           <Link  to='/contactUs'><i>Contact Us</i></Link>
           {!AuthState.LoginState && <Link className='mx-2' to='/login'>Login</Link>}
           {AuthState.LoginState && <Button variant="secondary" className='mx-2' onClick={HandleLogout} >Logout</Button>}
          <Button onClick={props.onClick} variant="outline-info" style={{float:'right'}}>Cart<Badge bg="light" text="dark">{quantity}</Badge></Button>
        </Container>
      </Navbar>
  );
}

export default HeaderNavbar;