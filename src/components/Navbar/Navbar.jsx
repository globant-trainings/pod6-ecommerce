import React from "react";
import "./navbar.css";
import CartStatus from "../CartStatus/CartStatus";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <p className="navbar__title">Globant</p>
        <p className="navbar__title">e-shop</p>
      </div>
      <CartStatus />
    </div>
  );
};

export default Navbar;
