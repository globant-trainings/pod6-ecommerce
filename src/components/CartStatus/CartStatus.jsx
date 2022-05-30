import React from "react";
import cart from "../../assets/cart.png";
import CartContext from "../../store/cart/CartContext";
import { useContext } from "react";

const CartStatus = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <p>{cartItems}</p>
      <img src={cart} alt="cart" />
    </div>
  );
};

export default CartStatus;
