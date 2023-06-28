import { Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { CartAction } from "../Redux-Store";

function Item(props) {
  const CartState = useSelector((state) => state.CartSlice);
  const AuthState = useSelector((state) => state.AuthSlice);
  const dispatch = useDispatch()
  const AddItem = async (item) => {
    const ItemIndex = CartState.items.findIndex(
      (i) => i.imageUrl === item.imageUrl
    );
    const TempCartItems = [...CartState.items];
    if (ItemIndex > -1) {
      //const updateQuantity = TempCartItems[ItemIndex].quantity + 1 ;
      const updateitem = {
        ...TempCartItems[ItemIndex],
        quantity: TempCartItems[ItemIndex].quantity + 1,
      };
      TempCartItems[ItemIndex] = updateitem;
    } else {
      TempCartItems.push(item);
    }
    dispatch(CartAction.AddCartItem(TempCartItems));
    setTimeout(()=>{
      props.AddItemToBackend()
    }, 1000)
   }
   
  return (
    <Col>
      <Card style={{ width: "18rem", marginBottom: "3vh" }}>
        <Card.Img variant="top" src={`${props.item.imageUrl}`} />
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Text>RS {props.item.price}</Card.Text>
        <Button onClick={AddItem.bind(null, props.item)} variant="info">
          Add To Cart
        </Button>
      </Card>
    </Col>
  );
}

export default Item;
