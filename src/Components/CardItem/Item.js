
import { useContext } from "react";
import { Col , Button} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CartContext from "../Store/Cart-Context";
import AuthContext from "../Store/AuthContext";


function Item(props) {
  const {userName} = useContext(AuthContext)
  const Cartctx = useContext(CartContext);
    const AddItem = async (item)=>{
      const ItemIndex = Cartctx.items.findIndex((i)=> i.imageUrl === item.imageUrl);
      if(ItemIndex > -1){
       const updateQuantity = Cartctx.items[ItemIndex].quantity + 1 ;
       try {
        const response = await fetch(`https://ecommerce-c4d9a-default-rtdb.firebaseio.com/${userName}/${Cartctx.items[ItemIndex].key}.json`,{
          method:'PATCH',
          body:JSON.stringify({ quantity: updateQuantity})
      });
        if(!response.ok){
          throw new Error('Unable to fetch! Something went wronge.')
        }else{
        // await response.json();
        Cartctx.fetchCartItems()
        }
      } catch (error) {
         console.log(error.message)
      } 
      } else{
      try {
        const response = await fetch(`https://ecommerce-c4d9a-default-rtdb.firebaseio.com/${userName}.json`,{
          method:'POST',
          body:JSON.stringify(item)
      });
        if(!response.ok){
          throw new Error('Unable to fetch! Something went wronge.')
        }else{
        //await response.json();
        Cartctx.fetchCartItems()
        }
      } catch (error) {
         console.log(error.message)
      } 
    }
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
