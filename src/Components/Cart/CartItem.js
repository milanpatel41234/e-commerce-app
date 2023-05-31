import React from "react";
import { Card, Col } from "react-bootstrap";

function CartItem(props) {
  return (
    <row >
      <Col>
      <Card style={{ width: '8rem' , marginBottom:'3vh'}}>
      <Card.Img variant="top" src={`${props.item.imageUrl}`} />
        <h6>{props.item.title}</h6>
        </Card>
      </Col>
      <Col xs={5} >
       {props.item.price}
      </Col>
      <Col>
        {props.item.quantity}
      </Col>
    </row>
  );
}

export default CartItem;
