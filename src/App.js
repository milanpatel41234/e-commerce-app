import { useState } from "react";
import "./App.css";
import Brand from "./Components/Navbar/Brand";
//import Footer from "./Components/Navbar/Footer";
import HeaderNavbar from "./Components/Navbar/Navbar";
import CartProvider from "./Components/Store/CartProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const [CartState,setCartState] = useState(false);
  const ShowCart=()=>{
 setCartState(true)
  }
  const HideCart=()=>{
 setCartState(false)
  }

  const router = createBrowserRouter([
    {path:'/', element:  <Home cartstate={CartState} hidecart={HideCart}/>},
    {path:'/about', element:  <About/>},
    // {path:'/store', element:  <Store/>},
  ])
  return (
    <div className="layout">
      <CartProvider>
      <HeaderNavbar onClick={ShowCart} />
      <Brand/>
    <RouterProvider router={router}/>
    
      </CartProvider>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
