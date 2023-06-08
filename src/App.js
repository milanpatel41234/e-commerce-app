import { useState } from "react";
import "./App.css";
import Brand from "./Components/Navbar/Brand";
//import Footer from "./Components/Navbar/Footer";
import HeaderNavbar from "./Components/Navbar/Navbar";
import CartProvider from "./Components/Store/CartProvider";
import {Route,Redirect} from 'react-router-dom'
//import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MovieStore from "./Pages/MovieStore";
import ContactUs from "./Pages/ContactUs";
import Cart from './Components/Cart/Cart'

function App() {
  const [CartState,setCartState] = useState(false);
  const ShowCart=()=>{
 setCartState(true)
  }
  const HideCart=()=>{
 setCartState(false)
  }

  // const router = createBrowserRouter([
  //   {path:'/', element:  <Home cartstate={CartState} hidecart={HideCart}/>},
  //   {path:'/about', element:  <About/>},
  //   {path:'/store', element:  <MovieStore/>},
  // ])
  return (
    <div className="layout">
      <CartProvider>
      <HeaderNavbar onClick={ShowCart} />
      <Brand/>
      {CartState && <Cart onClick={HideCart}/>}
    {/* <RouterProvider router={router}/> */}
    <Route path='/' exact>
    <Redirect to='/home'/>
    </Route>
    <Route path='/home'>
    <Home/>
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
      </CartProvider>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
