import React from "react";
import "./navbar.css";
import CartStatus from "../CartStatus/CartStatus";
import { Link } from "react-router-dom";

const Navbar = ({ showCartStatus = true }) => {
  return (
    <div className="navbar__container">
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <div className="navbar__logo">
          <p className="navbar__title">Globant</p>
          <p className="navbar__title">e-shop</p>
        </div>
      </Link>
      {showCartStatus ? <CartStatus /> : null}
    </div>
  );
};

export default Navbar;
