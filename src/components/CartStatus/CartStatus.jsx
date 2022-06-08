import React from "react";
import cart from "../../assets/cart.png";
import circle from "../../assets/circle.png";
import CartContext from "../../store/cart/CartContext";
import { useContext } from "react";
import "./cartStatus.css";

const CartStatus = () => {
  const { itemCount, modalVisibility } = useContext(CartContext);
  return (
    <div
      onClick={() => modalVisibility(true)}
      className="container__cartStatus"
    >
      <img className="cart__image" src={cart} alt="cart" />
      <div className="container__status">
        <img src={circle} alt="circle" />
        <p className="container__counter">{itemCount}</p>
      </div>
      <p className="cart__text">Cart</p>
    </div>
  );
};

export default CartStatus;
