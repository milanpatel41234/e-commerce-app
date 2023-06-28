import React from "react";
import Item from "./Item";
import './ItemCard.css'
import { Container, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { CartAction } from "../Redux-Store";

const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      id:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity:1,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      id:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity:1,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      id:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity:1,
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      id:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        quantity:1,
    },
  ];

function ItemsCard() {
  // const AuthState = useSelector(state=>state.AuthSlice);
  // const CartState = useSelector(state=>state.CartSlice);
  // const dispatch = useDispatch()

 
  
  const Product = productsArr.map((item)=>(
    <Item item={item}
   key={item.id} />
  ));
  return <Container style={{ width: '70%' }}>
    <Row>
   {Product}
    </Row>
   </Container>
}

export default ItemsCard;
