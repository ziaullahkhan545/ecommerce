import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navigation.css";
import { connect } from "react-redux";
import Cart from "../cart-button/Cart";
import CartDropDown from "../cart-dropdown/CartDropDown";
import { createStructuredSelector } from "reselect";
import { currentUserSelector } from "../../redux/user/user-selectors";
import { cartHiddenSelector } from "../../redux/cart/cart-selectors";
import { signOutStart } from '../../redux/user/user-actions'

function Navigation({ currentUser, hidden, signOutStart }) {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutStart();
  };

  return (
    <div className="container-fluid">
      <div className="container center">
        <div className="navigation">
          <span className="logo" onClick={() => navigate("/")}>
            LOGO
          </span>
          <ul className="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {currentUser ? (
              <li>
                <NavLink to="/signin" onClick={handleSignOut}>
                  Logout
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink to="/signin">Login</NavLink>
              </li>
            )}
            <Cart />
          </ul>
        </div>
          {hidden ? null : (
            <div
              className="cart-main-dropdown"
              style={{ position: "relative" }}
            >
              <CartDropDown />
            </div>
          )}
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    hidden: cartHiddenSelector,
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);