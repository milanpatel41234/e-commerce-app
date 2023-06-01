import React from 'react'
import ItemsCard from '../Components/CardItem/ItemsCard';
import Cart from '../Components/Cart/Cart';
function Home(props) {
  return (
    <>
       {props.cartstate && <Cart onClick={props.hidecart}/>}
      <ItemsCard />
    </>
  )
}

export default Home
