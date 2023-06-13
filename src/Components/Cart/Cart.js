import React, { useContext } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Badge,
  Card,
} from "react-bootstrap";
import CartContext from "../Store/Cart-Context";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const RemoveItem = (item) => {
    ctx.removeItem(item);
  };
  let CartItems = <tr><td> Upps! No items Available</td></tr>;
  if (ctx.items.length > 0) {
    CartItems = ctx.items.map((item, index) => (
      <tr key={item.id}>
        <td>{index + 1}</td>
        <td>
          <Card.Img
            style={{ height: "15vh", width: "15vh" }}
            variant="top mx-6"
            src={`${item.imageUrl}`}
          />
          <Row className="mx-3">{item.title}</Row>{" "}
        </td>
        <td>{item.price}</td>
        <td>
          <Badge bg="secondary">{item.quantity}</Badge>
          <Button
            onClick={RemoveItem.bind(null, item)}
            variant="danger mx-1 my-1"
            size="sm"
          >
            Remove
          </Button>
        </td>
      </tr>
    ));
  }
  const HandlePurchase=()=>{
    ctx.purchaseItem()
    alert(`Odered successfully(TOTAL-AMOUNT: ${ctx.totalAmount})`)
  }
  return (
    <Container
      style={{
        width: "40%",
        marginLeft: "58%",
        marginTop: "5rem",
        zIndex: "10",
        paddingTop: "1rem",
        backgroundColor: "white",
        position: "fixed",
        height: "30rem",

        border: "1px solid black",
      }}
    >
      <Button
        onClick={props.onClick}
        style={{ float: "right" }}
        variant="danger"
        size="sm"
      >
        X
      </Button>
      <h3>Cart</h3>
      <Container
        style={{
          width: "29rem",
          zIndex: "11",
          paddingTop: "2rem",
          backgroundColor: "white",
          position: "fixed",
          height: "55vh",
          overflow: "scroll",
          border: "1px solid black",
        }}
      >
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>{CartItems}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
     
      <Row
        style={{
          position: "absolute",
          bottom: "0",
          marginTop: "auto",
         
        }}
      >
         <Col>
            <Table>
              <thead>
                <tr>
                  <td style={{width:'10rem'}}><b>TOTAL-</b> Rs {ctx.totalAmount}</td>
                  <td><Button onClick={HandlePurchase} variant="info">Purchase</Button></td>
                  
                </tr>
              </thead>
            </Table>
          </Col>
      </Row>
    </Container>
  );
};

export default Cart;
