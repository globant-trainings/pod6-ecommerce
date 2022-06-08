import React from "react";
import "./BasicsFilter.css";

const BasicsFilter = ({ setBasicsOn }) => {
  return (
    <div className="basicsFilterContainer">
      <p className="filters__title">Filters</p>
      <div className="basicsFilterCheckbox">
        <input
          type="checkbox"
          onChange={(e) => setBasicsOn(e.target.checked)}
        />
        <p>Basics</p>
      </div>
    </div>
  );
};

export default BasicsFilter;
