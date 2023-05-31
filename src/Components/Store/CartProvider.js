import CartContext from "./Cart-Context"
import { useReducer } from "react";

const DefaultCartState = {
  items:[] ,
  totalAmount:0 ,
};
const CartReduser = (state,action)=>{
if(action.type === 'ADD'){
  const ItemIndex = state.items.findIndex((item)=> item.id === action.item.id);
  console.log(ItemIndex)
  if(ItemIndex > -1){
    alert('Item is already present in your cart')
    const updateamount = state.totalAmount
    const updateitems = state.items;
    return  {
      items: updateitems ,
      totalAmount: updateamount ,
    }
  }else{
  const updateamount = state.totalAmount + action.item.price;
  const updateitems = state.items.concat(action.item);
  return  {
    items: updateitems ,
    totalAmount: updateamount ,
  }
  };
} else if(action.type === 'REMOVE'){
 const updateitems = state.items.filter((item)=>{ return action.item.id !== item.id })
   const updateamount = state.totalAmount - action.item.price ;
  return  {
    items: updateitems ,
    totalAmount: updateamount ,
  };
} else{
  return DefaultCartState;
}
};

function CartProvider(props) {
const [cartstate , dispatchaction] = useReducer(CartReduser, DefaultCartState);

    const AddItem = (item) => {
      dispatchaction({type: 'ADD', item:item})
    };
    const RemoveItem = (item) => {
      dispatchaction({type: 'REMOVE', item:item})
    };

    const cartContext = {
        items: cartstate.items,
        totalAmount:cartstate.totalAmount ,
        addItem: AddItem,
        removeItem: RemoveItem
       }
  return (
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  )
}

export default CartProvider

