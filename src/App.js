import { useState } from "react";
import "./App.css";
import Brand from "./Components/Navbar/Brand";
//import Footer from "./Components/Navbar/Footer";
import HeaderNavbar from "./Components/Navbar/Navbar";
import CartProvider from "./Components/Store/CartProvider";
import {Route,Redirect} from 'react-router-dom'
// import { useContext } from "react";
// import AuthContext from "./Components/Store/AuthContext";
import { Suspense , lazy} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "./Components/Redux-Store";
import Home from "./Pages/Home"
//import About from "./Pages/About";
//import MovieStore from "./Pages/MovieStore";
//import ContactUs from "./Pages/ContactUs";
//import Cart from './Components/Cart/Cart';
//import LoginPage from "./Pages/LoginPage";
//import ProductPage from "./Pages/ProductPage";

const About = lazy(()=> import("./Pages/About"))
const ContactUs = lazy(()=> import("./Pages/ContactUs"))
const LoginPage = lazy(()=> import("./Pages/LoginPage"))
const ProductPage = lazy(()=> import("./Pages/ProductPage"))
const MovieStore = lazy(()=> import( "./Pages/MovieStore"))
//const Home = lazy(()=> import("./Pages/Home"))
const Cart = lazy(()=> import('./Components/Cart/Cart'))

function App() {
  //const Authctx = useContext(AuthContext);
  const AuthState = useSelector(state => state.AuthSlice)
  const [CartState,setCartState] = useState(false);
  const ShowCart=()=>{
 setCartState(true)
  }
  const HideCart=()=>{
 setCartState(false)
  }

  const [FetchCartFirstTime, setFetchCartFirstTime] = useState(true);
  const dispatch = useDispatch()
  const FetchCartItems = async () =>{
    try {
      const response = await fetch(`https://ecommerce-c4d9a-default-rtdb.firebaseio.com/${AuthState.UserName}/CartItems.json`);
      if(!response.ok){
        throw new Error('Unable to fetch! Something went wronge.')
      }else{
      const data = await response.json();
      let TempCartItems = [];
      let  TempKey;
      for(const key in data){
       TempCartItems = data[key]
       TempKey = key
      }
      dispatch(CartAction.AddCartItem(TempCartItems))
      dispatch(CartAction.AddKey(TempKey))
      }
    } catch (error) {
        console.log(error.message)
    } 
  }
  if(AuthState.LoginState && FetchCartFirstTime){
    FetchCartItems();
    setFetchCartFirstTime(false);
  }

  return (
    <div className="layout">
      <Suspense fallback={<p>Loding...</p>}>
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
    {AuthState.LoginState ? <ProductPage/> : <Redirect to='/login'/>}
    </Route>
    <Route path='/about'>
      <About/>
    </Route>
    <Route path='/store'>
    {AuthState.LoginState ? <MovieStore/> : <Redirect to='/login'/>}
    </Route>
    <Route path='/contactUs'>
      <ContactUs/>
    </Route>
    <Route path='/login'>
      <LoginPage/>
    </Route>
      </CartProvider>
      {/* <Footer/> */}
      </Suspense>
    </div>
  );
}

export default App;
