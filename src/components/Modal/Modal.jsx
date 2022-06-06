import React from "react";
import "./modal.css";
import CartContext from "../../store/cart/CartContext";
import close from "../../assets/close.jpg";
import { useContext } from "react";

const Modal = ({ children }) => {
  const { modalVisibility, modal } = useContext(CartContext);
  return (
    <div className={modal ? "modal__show" : "modal__hidden"}>
      <div className="modal">
        <div className="modal__title__container">
          <p className="modal__title">Cart</p>
          <div
            className="container__close"
            onClick={() => modalVisibility(false)}
          >
            <img alt="close" className={"modal__close"} src={close}></img>
          </div>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
