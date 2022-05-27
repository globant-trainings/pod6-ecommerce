import React from "react";
import PropTypes from "prop-types";
import cart from "../../assets/cart.png";

export const CartStatusComponent = () => {
  return <img src={cart} alt="cart" />;
};

CartStatusComponent.propTypes = {};

export default CartStatusComponent;
