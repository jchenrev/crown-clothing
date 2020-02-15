import { createSelector } from "reselect";

const selectCartItems = state => state.cart.cartItems;

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((itemCount, item) => itemCount + item.quantity, 0)
);
