import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM":
      let updatedItems;
      const i = state.items.findIndex((e) => e.name === action.item.name);

      if (i > -1) {
        updatedItems = [...state.items];
        updatedItems[i].amount = ++updatedItems[i].amount;
      } else {
        updatedItems = [...state.items, action.item];
      }

      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    case "REMOVE_CART_ITEM":
      let updatedItemsList;
      let totalAmount;

      state.items.forEach((item, index) => {
        if (item.id === action.itemId) {
          if (item.amount === 1) {
            updatedItemsList = state.items.filter(
              (item) => item.id !== action.itemId
            );
          } else {
            updatedItemsList = [...state.items];
            updatedItemsList[index].amount -= 1;
          }
          totalAmount = +state.totalAmount - +item.price;
        }
      });

      return {
        items: updatedItemsList,
        totalAmount,
      };
    default:
      return state;
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", itemId: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
