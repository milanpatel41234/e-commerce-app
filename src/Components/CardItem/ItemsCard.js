import React from "react";
import Item from "./Item";
import './ItemCard.css'
import { Container, Row } from "react-bootstrap";

const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

function ItemsCard() {

  const Product = productsArr.map((item)=>(
    <Item price={item.price}
   title={item.title} 
   img={item.imageUrl}
   key={item.imageUrl} />
  ));
  return <Container style={{ width: '70%' }}>
    <Row>
   {Product}
    </Row>
   </Container>
}

export default ItemsCard;
