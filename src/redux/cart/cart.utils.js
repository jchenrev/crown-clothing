export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const decreaseItem = (cartItems, cartItemIdToDecrease) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemIdToDecrease
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemIdToDecrease && cartItem.quantity > 0
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1
          }
        : cartItem
    );
  }

  return [...cartItems];
};
