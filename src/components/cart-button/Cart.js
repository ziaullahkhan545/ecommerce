import React from "react";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import "./cart.css";
import { connect } from 'react-redux';
import { toggleDropDownMenu } from '../../redux/cart/cart-actions';
import { cartItemsCountSelector } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';

function Cart(props) {
  const { cart, itemCount } = props;
  return (
    <div className="cnIcon" onClick={cart}>
      <AiOutlineShoppingCart className="cartIcon" />
      <span className="countNum">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  cart: () => dispatch(toggleDropDownMenu())
})

const mapStateToProps = createStructuredSelector({
  itemCount: cartItemsCountSelector
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
