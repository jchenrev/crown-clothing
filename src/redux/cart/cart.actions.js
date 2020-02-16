import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: null
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = item => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const increaseItem = itemId => ({
  type: CartActionTypes.INCREASE_ITEM,
  payload: itemId
});

export const decreaseItem = itemId => ({
  type: CartActionTypes.DECREASE_ITEM,
  payload: itemId
});
