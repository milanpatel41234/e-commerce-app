import CartContext from "./Cart-Context";
import { useReducer , useEffect,useContext } from "react";
import AuthContext from "./AuthContext";

const DefaultCartState = {
  items: [],
  totalAmount: 0,
};
const CartReduser = (state, action) => {
  if (action.type === "ADD") {
    const updateamount =
      state.totalAmount + action.item.price * action.item.quantity;
      const  updateitems = state.items.concat(action.item)
    return {
      items: updateitems,
      totalAmount: updateamount,
    };
  } else if (action.type === "REMOVE") {
    const updateamount = state.totalAmount - action.item.price;
    const updateitems = state.items.filter((item) => {
      return action.item.id !== item.id;
    });
   
    return {
      items: updateitems,
      totalAmount: updateamount,
    };
  }
  return DefaultCartState;
};
function CartProvider(props) {
  const {userName , loginState} = useContext(AuthContext)
  const [cartstate, dispatchaction] = useReducer(CartReduser, DefaultCartState);
  useEffect(()=>{
    FetchCartItems()
 },[loginState])

  const AddItem = (item) => {
    dispatchaction({ type: "ADD", item: item });
  };
  const RemoveItem = (item) => {
    dispatchaction({ type: "REMOVE", item: item });
  };
  const PurchaseItem = () => {
    dispatchaction({ type: "PURCHASE",});
  };
 
  async function FetchCartItems() {
    try {
      const response = await fetch(`https://ecommerce-c4d9a-default-rtdb.firebaseio.com/${userName}.json`);
      if(!response.ok){
        throw new Error('Unable to fetch! Something went wronge.')
      }else{
        dispatchaction({ type: "NOACTION",});
      const data = await response.json();
      for(const key in data){
        const item = {
          title:data[key].title,
          price:data[key].price,
          quantity:data[key].quantity,
          key:key,
          imageUrl:data[key].imageUrl,
        }
      AddItem(item)
      }
      }
    } catch (error) {
        console.log(error.message)
    } 
  }
 
const Fetch=()=>{ FetchCartItems()}

  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: AddItem,
    fetchCartItems:Fetch,
    removeItem: RemoveItem,
   
    purchaseItem:PurchaseItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
