import CartActionTypes from "./cart.types";
import { addItemToCart, decreaseItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      console.log("reducer case remove item");
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case CartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItem(state.cartItems, action.payload)
      };
    default:
      console.log("reducer case default");
      return state;
  }
};

export default cartReducer;
