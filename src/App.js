import { useState } from "react";
import "./App.css";
import ItemsCard from "./Components/CardItem/ItemsCard";
import Cart from "./Components/Cart/Cart";
import Brand from "./Components/Navbar/Brand";
//import Footer from "./Components/Navbar/Footer";
import HeaderNavbar from "./Components/Navbar/Navbar";
import CartProvider from "./Components/Store/CartProvider";

function App() {
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
      <ItemsCard />
      </CartProvider>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
