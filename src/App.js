import { useState } from "react";
import "./App.css";
import Brand from "./Components/Navbar/Brand";
//import Footer from "./Components/Navbar/Footer";
import HeaderNavbar from "./Components/Navbar/Navbar";
import {Route,Redirect} from 'react-router-dom'

import { Suspense , lazy} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "./Components/Redux-Store";
import Home from "./Pages/Home"
import { useEffect } from "react";
//import About from "./Pages/About";
//import MovieStore from "./Pages/MovieStore";
//import ContactUs from "./Pages/ContactUs";
//import Cart from './Components/Cart/Cart';
//import LoginPage from "./Pages/LoginPage";
import ProductPage from "./Pages/ProductPage";

const About = lazy(()=> import("./Pages/About"))
const ContactUs = lazy(()=> import("./Pages/ContactUs"))
const LoginPage = lazy(()=> import("./Pages/LoginPage"))
const Cart = lazy(()=> import('./Components/Cart/Cart'))
let SandCartData = false;

function App() {
  
  const AuthState = useSelector(state => state.AuthSlice);
  const CartState = useSelector(state => state.CartSlice);
  const [CartIsVisible,setCartIsVisible] = useState(false);
  const ShowCart=()=>{
 setCartIsVisible(true)
  }
  const HideCart=()=>{
 setCartIsVisible(false)
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
  useEffect(()=>{
    if(AuthState.LoginState && FetchCartFirstTime){
      FetchCartItems();
      setFetchCartFirstTime(false);
    }else if(!AuthState.LoginState && !FetchCartFirstTime){
      FetchCartItems();
      setFetchCartFirstTime(true);
    }
  },[AuthState.LoginState , FetchCartFirstTime])
  
 
    const AddItemToBackend = async() =>{
      if (CartState.key) {
        try {
          const response = await fetch(
            `https://ecommerce-c4d9a-default-rtdb.firebaseio.com/${AuthState.UserName}/CartItems/${CartState.key}.json`,
            {
              method: "PUT",
              body: JSON.stringify(CartState.items),
            }
          );
          if (!response.ok) {
            throw new Error("Unable to fetch! Something went wronge.");
          }
        } catch (error) {
          console.log(error.message);
        }
       } else {
        try {
          const response = await fetch(
            `https://ecommerce-c4d9a-default-rtdb.firebaseio.com/${AuthState.UserName}/CartItems.json`,
            {
              method: "POST",
              body: JSON.stringify(CartState.items),
            }
          );
          if (!response.ok) {
            throw new Error("Unable to fetch! Something went wronge.");
          } else {
            const data =  await response.json();
             dispatch(CartAction.AddKey(data.name));
           }
        } catch (error) {
          console.log(error.message);
        }
     }
    }
 useEffect(()=>{
  if (SandCartData){  
    AddItemToBackend()
  }else{
    SandCartData = true;
  }
 },[CartState.items])

  return (
    <div className="layout">
      <Suspense fallback={<p>Loding...</p>}>
    
      <HeaderNavbar onClick={ShowCart} />
      <Brand/>
      {CartIsVisible && <Cart onClick={HideCart}/>}
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
    <Route path='/contactUs'>
      <ContactUs/>
    </Route>
    <Route path='/login'>
      <LoginPage/>
    </Route>
     
      {/* <Footer/> */}
      </Suspense>
    </div>
  );
}

export default App;
