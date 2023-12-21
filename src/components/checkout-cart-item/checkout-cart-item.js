import React from "react";
import "./checkout-cart-item.css";
import { TiDeleteOutline } from "react-icons/ti";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { connect } from 'react-redux';
import { removeItemFromCart, addItemToCart, decrementQuantity } from "../../redux/cart/cart-actions";


function CheckOutCartItem({ cartItem, removeItem, updateItem, decQuantity }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="item-container">
      <div className="checkout-cart-item">
        <div className="image">
          <img src={imageUrl} />
        </div>
        <div className="title">
          <span>{name}</span>
        </div>
        <div className="quantity">
          <FaLessThan className="icon" onClick={() => decQuantity(cartItem)} />
          <span className="value">{quantity}</span>
          <FaGreaterThan className="icon" onClick={() => updateItem(cartItem)} />
        </div>
        <div className="title">
          <span>
            {quantity} x ${price} = {quantity * price}
          </span>
        </div>
        <div className="icon">
          <TiDeleteOutline className="remove-icon" onClick={() => removeItem(cartItem)} />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    removeItem: (item) => dispatch(removeItemFromCart(item)),
    updateItem: (item) => dispatch(addItemToCart(item)),
    decQuantity: (item) => dispatch(decrementQuantity(item)),
})

export default connect(null, mapDispatchToProps)(CheckOutCartItem);
