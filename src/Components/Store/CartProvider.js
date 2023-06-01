import CartContext from "./Cart-Context";
import { useReducer } from "react";

const DefaultCartState = {
  items: [],
  totalAmount: 0,
};
const CartReduser = (state, action) => {
  if (action.type === "ADD") {
    const updateamount =
      state.totalAmount + action.item.price * action.item.quantity;
    const ItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updateitems;
    if (ItemIndex > -1) {
      const existingitem = {
        ...state.items[ItemIndex],
        quantity: state.items[ItemIndex].quantity + action.item.quantity,
      };
      const Olditems = [...state.items];
      Olditems[ItemIndex] = existingitem;
      updateitems = Olditems;
    } else {
      updateitems = state.items.concat(action.item);
    }
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
  const [cartstate, dispatchaction] = useReducer(CartReduser, DefaultCartState);

  const AddItem = (item) => {
    dispatchaction({ type: "ADD", item: item });
  };
  const RemoveItem = (item) => {
    dispatchaction({ type: "REMOVE", item: item });
  };

  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: AddItem,
    removeItem: RemoveItem,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
