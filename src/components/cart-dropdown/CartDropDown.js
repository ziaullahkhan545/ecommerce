import React from "react";
import CustomBtn from "../custom-button/custom-button";
import "./cartdropdown.css";
import { TiDeleteOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { removeItemFromCart, toggleDropDownMenu } from "../../redux/cart/cart-actions";
import { cartItemsSelector } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';


function CartDropDown({ cart, cartItems, removeCartItem }) {
  const navigate = useNavigate();

  const handleCheckOut = () => {
    navigate("/checkout");
    cart();
  };

  return (
    <div className="cart-dropdown-container">
      <div className="dropdown-items">
        {cartItems.length == 0 ? (
          <div className="empty-cart"><p>Your Cart Is Empty</p></div>
        ) : (
          cartItems.map((cartItem) => {
            const { name, imageUrl, price, id, quantity } = cartItem;
            return (
              <div className="cart-dropdown-item" key={id}>
                <img src={imageUrl} />
                <div className="title-price">
                  <h2>{name}</h2>
                  <p> {quantity} x ${price}</p>
                </div>
                <TiDeleteOutline className="icon" onClick={() => removeCartItem(cartItem)}/>
              </div>
            );
          })
        )}
      </div>
      <div className="checkout-btn-container">
        <CustomBtn className="custom-btn-padding" onClick={handleCheckOut}>
          CheckOut
        </CustomBtn>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  cart: () => dispatch(toggleDropDownMenu()),
  removeCartItem: (item) => dispatch(removeItemFromCart(item))
});

const mapStateToProps = createStructuredSelector({
  cartItems: cartItemsSelector
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropDown);
