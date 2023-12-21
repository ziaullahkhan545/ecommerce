
import { createSelector } from "reselect";

const cartSelector = state => state.cart;

export const cartItemsSelector = createSelector(
    [cartSelector],
    cart => cart.cartItems
);

export const cartItemsCountSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0) 
)

export const cartHiddenSelector = createSelector(
    [cartSelector],
    cart => cart.hidden
)

export const totalCountSelector = createSelector(
    [cartItemsSelector],
    cartItems => cartItems.reduce((acc, cartItems) => acc + cartItems.price * cartItems.quantity, 0)
)
