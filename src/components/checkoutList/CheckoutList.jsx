import React from "react";
import PropTypes from "prop-types";
import "./checkoutList.css";
import trash from "../../assets/trash.jpg";

const CheckoutList = ({ products }) => {
  return (
    <div>
      {products.map((element) => {
        return (
          <div className="row__checkout">
            <img alt="coffee" src={require("../../assets/coffee.png")} />
            <p>{element.name}</p>
            <p>${element.price}</p>
            <img alt="trash" src={trash} />
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
