import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Badge,
  Card,
} from "react-bootstrap";

const Cart = (props) => {
  const items = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
{
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

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
        height: "80vh",
       
        border: "1px solid black",
      }}
    >
      <Button onClick={props.onClick} style={{ float: "right" }} variant="danger" size="sm">
        X
      </Button>
      <h3>Cart</h3>
      <Container  style={{
      width:'28rem',
        zIndex: "11",
        paddingTop: "2rem",
        backgroundColor: "white",
        position: "fixed",
        height: "55vh",
        overflow: "scroll",
        border: "1px solid black",
      }}>
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
              <tbody>
                {items.map((item, index) => (
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
                      <Button variant="danger mx-1 my-1" size="sm">
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Button
        variant="info"
        style={{
          position: "absolute",
          bottom: "0",
          marginTop: "auto",
          marginBottom: ".3rem",
        }}
      >
        Purchase
      </Button>
    </Container>
  );
};

export default Cart;
