import React from "react";
import "./modal.css";
import CartContext from "../../store/cart/CartContext";
import { useContext } from "react";

const Modal = () => {
  const { modalVisibility, modal } = useContext(CartContext);
  return (
    <div className={modal ? "modal__show" : "modal__hidden"}>
      <div className={"modal"}>
        {" "}
        <button onClick={() => modalVisibility(false)}> close</button>
        <p>Modal List </p>
      </div>
    </div>
  );
};

export default Modal;
