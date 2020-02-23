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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity <= 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id && cartItem.quantity > 0
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
      : cartItem
  );
};

export const filterItemFromCart = (cartItems, cartItemToFilter) => {
  return cartItems.filter(item => item.id !== cartItemToFilter.id);
};

export const getCartItemsCount = cartItems =>
  cartItems.reduce((itemCount, item) => itemCount + item.quantity, 0);

export const getCartTotal = cartItems => {
  return cartItems.reduce(
    (cartTotal, item) => cartTotal + item.price * item.quantity,
    0
  );
};
