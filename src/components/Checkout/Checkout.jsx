import React from "react";
import CheckoutList from "../checkoutList/CheckoutList";
import CartContext from "../../store/cart/CartContext";
import { useContext } from "react";
import Button from "../Button/Button";
import "./checkout.css";

const Checkout = () => {
  const { total } = useContext(CartContext);
  return (
    <div>
      <CheckoutList />
      <Button variant={"primary"} children={"Proceed to Payment"} />
      <div className="subtotal__container">
        <p>
          Subtotal: <b>${total}</b>
        </p>
      </div>
    </div>
  );
};

export default Checkout;
