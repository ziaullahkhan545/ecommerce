import React from "react";
import "./collection-item.css";
import CustomBtn from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart-actions";

function CollectionItem({ item, addCartToItem }) {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="product-image">
        <div
          className="image"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        <CustomBtn className="addToCart" onClick={() => addCartToItem(item)}>
          Add to cart
        </CustomBtn>
      </div>
      <div className="card-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addCartToItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
