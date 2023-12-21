
import cartActionTypes from "./cart-action-types";

export const toggleDropDownMenu = () => ({
    type: cartActionTypes.TOGGLE_DROPDOWN_MENU
})

export const addItemToCart = (item) => ({
    type: cartActionTypes.ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})

export const decrementQuantity = (item) => ({
    type: cartActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})