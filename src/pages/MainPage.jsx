import React, { useState } from "react";
import FilterSidebar from "../components/Filters/FilterSidebar";
import Navbar from "../components/Navbar/Navbar";
import CatalogItem from "../components/CatalogItem/CatalogItem";
import Modal from "../components/Modal/Modal";
import CartContext from "../store/cart/CartContext";
import { useContext } from "react";
import { products, prices, options } from "./data";
import "./mainPage.css";

const MainPage = () => {
  const { modal } = useContext(CartContext);
  const [filters, setFilters] = useState("none");

  const handlePriceChange = (x) => {
    console.log(x);
  };
  const handleSortChange = (x) => {
    console.log(x);
  };
  const handleBasics = (x) => {
    if (x) {
      setFilters("basics");
    } else {
      setFilters("none");
    }
  };

  return (
    <div>
      <Navbar />
      {modal ? <Modal /> : null}
      <div className="row__MainPage">
        <div className="col__MainPage__20">
          <FilterSidebar
            onChangePrice={(x) => handlePriceChange(x)}
            onChangeSort={(x) => handleSortChange(x)}
            onChangeBasics={(x) => handleBasics(x)}
            prices={prices}
            options={options}
          />
        </div>
        <div className="col__MainPage__80">
          <h2 className="products__title">Products</h2>
          <div className="catalog__grid">
            {products.map((product) => {
              if (filters === "basics") {
                return product.basic ? (
                  <CatalogItem key={product.id} product={product} />
                ) : (
                  ""
                );
              }
              return <CatalogItem key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
