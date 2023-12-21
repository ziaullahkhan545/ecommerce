export const addingCartItem = (cartItems, addedCartItem) => {
  const isItemExists = cartItems.find(
    (cartItem) => cartItem.id === addedCartItem.id
  );

  if (isItemExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === addedCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...addedCartItem, quantity: 1 }];
};

export const removingItemFromCart = (cartItems, removeCartItem) =>
  cartItems.filter((cartItem) => cartItem.id !== removeCartItem.id);

export const decrementItemQuantity = (cartItems, decItem) => {
  return cartItems.map((cartItem) => {
    if (cartItem.id === decItem.id && decItem.quantity > 1) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
};
