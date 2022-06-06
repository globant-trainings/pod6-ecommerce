import React from "react";
import "./navbar.css";
import CartStatus from "../CartStatus/CartStatus";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__title">Navbar</div>
      <CartStatus />
    </div>
  );
};

export default Navbar;
