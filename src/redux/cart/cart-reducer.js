import cartActionTypes from "./cart-action-types";
import { addingCartItem, removingItemFromCart, decrementItemQuantity } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_DROPDOWN_MENU:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addingCartItem(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removingItemFromCart(state.cartItems, action.payload)
      }
    case cartActionTypes.DECREMENT_ITEM_QUANTITY:
      return {
        ...state, 
        cartItems: decrementItemQuantity(state.cartItems, action.payload)
      }
    case cartActionTypes.CLEAR_CART: 
      return {
        ...state,
        cartItems: [],
      }
    default:
      return state;
  }
};

export default CartReducer;