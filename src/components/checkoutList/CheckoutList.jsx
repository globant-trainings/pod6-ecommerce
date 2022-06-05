import React from "react";
import PropTypes from "prop-types";
import "./checkoutList.css";
import trash from "../../assets/trash.jpg";
import CartContext from "../../store/cart/CartContext";
import { useContext } from "react";

const CheckoutList = () => {
  const { removeFromCart, cartItems } = useContext(CartContext);
  const remove = (product) => {
    removeFromCart(product);
  };

  return (
    <div>
      {cartItems.map((product) => {
        return (
          <div className="row__checkout">
            <img alt="coffee" src={require("../../assets/coffee.png")} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <p>x{product.quantity}</p>
            <img onClick={() => remove(product)} alt="trash" src={trash} />
          </div>
        );
      })}
    </div>
  );
};

CheckoutList.propTypes = {
  products: PropTypes.array,
};

export default CheckoutList;
