import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import CartContext from "../../store/cart/CartContext";
import { useContext } from "react";
import "./addSubstract.css";

const AddSubstract = ({
  limitCount,
  variant,
  size,
  className,
  onAdd,
  onSubstract,
  product,
  ...props
}) => {
  const [counter, setCounter] = useState(0);
  const { addToCart, increase, cartItems, decrease, removeFromCart } =
    useContext(CartContext);

  const handleAdd = () => {
    if (cartItems.find((item) => item.id === product.id)) {
      console.log("increase");
      increase(product);
    } else {
      addToCart(product);
    }
    setCounter((prev) => {
      const newCount = prev < limitCount ? prev + 1 : prev;
      onAdd(newCount);
      return newCount;
    });
  };

  const handleSubstract = () => {
    setCounter((prev) => {
      const newCount = prev === 0 ? 0 : prev - 1;
      onSubstract(newCount);
      if (
        cartItems[cartItems.findIndex((item) => item.id === product.id)]
          .quantity === 1
      ) {
        removeFromCart(product);
      } else {
        decrease(product);
      }
      return newCount;
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Button
            variant={"secondary"}
            children={"-"}
            onClick={handleSubstract}
            disabled={counter === 0 ? true : false}
          />
        </div>
        <div className="col-sm">
          <p>{counter}</p>
        </div>
        <div className="col-sm">
          <Button
            variant={"secondary"}
            children={"+"}
            onClick={() => handleAdd()}
            disabled={counter === limitCount ? true : false}
          />
        </div>
      </div>
    </div>
  );
};

AddSubstract.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["large", "normal"]),
  limitCount: PropTypes.number,
  initialCount: PropTypes.number,
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  onAdd: PropTypes.func.isRequired,
  onSubstract: PropTypes.func.isRequired,
};

export default AddSubstract;
