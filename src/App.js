import { useState } from "react";
import "./App.css";
import Brand from "./Components/Navbar/Brand";
//import Footer from "./Components/Navbar/Footer";
import HeaderNavbar from "./Components/Navbar/Navbar";
import CartProvider from "./Components/Store/CartProvider";
import {Route,Redirect} from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About";
import MovieStore from "./Pages/MovieStore";
import ContactUs from "./Pages/ContactUs";
import Cart from './Components/Cart/Cart'
import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";
import { useContext } from "react";
import AuthContext from "./Components/Store/AuthContext";

function App() {
  const Authctx = useContext(AuthContext)
  const [CartState,setCartState] = useState(false);
  const ShowCart=()=>{
 setCartState(true)
  }
  const HideCart=()=>{
 setCartState(false)
  }


  return (
    <div className="layout">
      <CartProvider>
      <HeaderNavbar onClick={ShowCart} />
      <Brand/>
      {CartState && <Cart onClick={HideCart}/>}
    <Route path='/' exact>
    <Redirect to='/home'/>
    </Route>
    <Route path='/home' exact>
    <Home />
    </Route>
    <Route path='/productpage'>
    {Authctx.loginState ? <ProductPage/> : <Redirect to='/login'/>}
    </Route>
    <Route path='/about'>
      <About/>
    </Route>
    <Route path='/store'>
      <MovieStore/>
    </Route>
    <Route path='/contactUs'>
      <ContactUs/>
    </Route>
    <Route path='/login'>
      <LoginPage/>
    </Route>
      </CartProvider>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
