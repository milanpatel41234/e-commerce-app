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
import AuthContext from "../Store/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../Redux-Store";

const Cart = (props) => {
  const CartState = useSelector(state=>state.CartSlice);
  const dispatch = useDispatch()
  const ctx = useContext(CartContext);
const {userName} = useContext(AuthContext)
  const RemoveItem =  (item) => {
    const TempItems = [...CartState.items];
    const FilteredItems = TempItems.filter(i => i.id !== item.id);
     dispatch(CartAction.AddCartItem(FilteredItems));
  };

  let CartItems = <tr><td> Upps! No items Available</td></tr>;

 
  if (CartState.items.length > 0) {
    CartItems = CartState.items.map((item, index) => (
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
  const HandlePurchase= async ()=>{
    try {
      const response = await fetch(`https://ecommerce-c4d9a-default-rtdb.firebaseio.com/${userName}.json`,{
        method:'DELETE' });
      if(!response.ok){
        throw new Error('Unable to remove! Something went wronge.')
      }else{
      //await response.json();
      ctx.fetchCartItems()
      }
    } catch (error) {
       console.log(error.message)
    } 
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
        height: "90%",

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
          width: "38%",
          zIndex: "11",
          paddingTop: "2rem",
          backgroundColor: "white",
          position: "fixed",
          height: "60%",
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
