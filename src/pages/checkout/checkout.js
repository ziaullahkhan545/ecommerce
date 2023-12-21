import React from "react";
import "./checkout.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  cartItemsSelector,
  totalCountSelector,
} from "../../redux/cart/cart-selectors";
import CheckOutCartItem from "../../components/checkout-cart-item/checkout-cart-item";
import StripeButton from "../../components/stripe-button/stripe-button";

function CheckOut({ total, cartItems }) {
  return (
    <div className="container-fluid">
      <div className="container center">
        <div className="checkout">
          <div className="head">
            <div className="title">
              <span>Product</span>
            </div>
            <div className="title">
              <span>Description</span>
            </div>
            <div className="title">
              <span>Quantity</span>
            </div>
            <div className="title">
              <span>Price</span>
            </div>
            <div className="title">
              <span>Remove</span>
            </div>
          </div>
          <div className="checkout-cart-items">
            {cartItems.map((cartItem) => (
              <CheckOutCartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>
          <div className="total">TOTAL: ${total}</div>
          <div className="testCode">
            <p>* please use the follwing test card for payment *<br/> 4242 4242 4242 4242 ---- Exp: 01/29 *use future valid data ---- CW: 123</p>
          </div>
          <div className="checkoutBtn">
            <StripeButton price={total}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  total: totalCountSelector,
  cartItems: cartItemsSelector,
});

export default connect(mapStateToProps)(CheckOut);
