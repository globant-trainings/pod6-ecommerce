import React from "react";
import cart from "../../assets/cart.png";
import circle from "../../assets/circle.png";
import CartContext from "../../store/cart/CartContext";
import { useContext } from "react";
import "./cartStatus.css";

const CartStatus = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <div className="container__cartStatus">
      <img src={cart} alt="cart" />
      <div className="container__status">
        <img src={circle} alt="circle" />
        <p className="container__counter">{itemCount}</p>
      </div>
    </div>
  );
};

export default CartStatus;
