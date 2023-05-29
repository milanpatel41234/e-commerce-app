
import { Col , Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";


function Item(props) {
  return (
    <Col>
      <Card style={{ width: '18rem' , marginBottom:'3vh'}}>
      <Card.Img variant="top" src={`${props.img}`} />
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>RS {props.price}</Card.Text>
      <Button variant="info">Add To Cart</Button>
      </Card>
    </Col>
  );
}

export default Item;
