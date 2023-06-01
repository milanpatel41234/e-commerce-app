
import { useContext } from "react";
import { Col , Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CartContext from "../Store/Cart-Context";


function Item(props) {
    const ctx = useContext(CartContext);
    const AddItem=(item)=>{
    ctx.addItem(item)
    }
  return (
    <Col>
      <Card style={{ width: '18rem' , marginBottom:'3vh'}}>
      <Card.Img variant="top" src={`${props.item.imageUrl}`} />
      <Card.Title>{props.item.title}</Card.Title>
      <Card.Text>RS {props.item.price}</Card.Text>
      <Button onClick={AddItem.bind(null,props.item)} variant="info">Add To Cart</Button>
      </Card>
    </Col>
  );
}

export default Item;
