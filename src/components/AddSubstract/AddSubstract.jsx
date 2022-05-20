import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./addSubstract.css";

const AddSubstract = ({
  initialCount,
  limitCount,
  variant,
  size,
  className,
  onAdd,
  onSubstract,
  ...props
}) => {
  const [counter, setCounter] = useState(initialCount);

  const handleAdd = () => {
    setCounter((prev) => {
      let newCount = limitCount;
      if (prev < limitCount) {
        newCount = prev + 1;
      }
      onAdd(newCount);
      return newCount;
    });
  };

  const handleSubstract = () => {
    setCounter((prev) => {
      let newCount = 0;
      if (prev > 0) {
        newCount = prev - 1;
      }
      onSubstract(newCount);
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
            id={"substract"}
            onClick={handleSubstract}
          />
        </div>
        <div className="col-sm">
          <p>{counter}</p>
        </div>
        <div className="col-sm">
          <Button
            variant={"secondary"}
            children={"+"}
            onClick={handleAdd}
            id={"increment"}
          />
        </div>
      </div>
    </div>
  );
};

AddSubstract.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(["large", "normal"]),
  variant: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  onAdd: PropTypes.func.isRequired,
  onSubstract: PropTypes.func.isRequired,
};

export default AddSubstract;
