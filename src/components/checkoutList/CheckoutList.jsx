import React, { useState } from "react";
import PropTypes from "prop-types";
import "./checkoutList.css";
import trash from "../../assets/trash.jpg";
//import CartContext from "../../store/cart/CartContext";
//import { useContext } from "react";

const CheckoutList = ({ products }) => {
  //const { removeFromCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState(products);
  const remove = (product) => {
    //removeFromCart(product);
    setCartItems(cartItems.filter((item) => item.id !== product.id));
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
