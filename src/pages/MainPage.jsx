/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
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
  const [initialState, setInitialState] = useState([]);
  const [productArray, setProductArray] = useState([]);
  const initialFilter = [{ basic: false, price: [], sortBy: "Relevant" }];
  const [filters, setFilters] = useState([]);

  const handlePriceChange = (payload) => {
    console.log(payload);
    const prevObject = [...filters];
    prevObject[0]["price"] = payload;
    changeFilters(prevObject);
  };

  const handleSortChange = (payload) => {
    const prevObject = [...filters];
    prevObject[0]["sortBy"] = payload;
    changeFilters(prevObject);
  };

  const handleBasics = (payload) => {
    const prevObject = [...filters];
    prevObject[0].basic = payload;
    changeFilters(prevObject);
  };

  const filterBasics = (x, newState) => {
    const filteredBasicArray =
      x === true
        ? newState.filter((product) => product.basic === true)
        : newState;
    return filteredBasicArray;
  };

  const filterPrice = (x, newState) => {
    if (x.length > 0) {
      const splitArray = x.split(",");
      const filteredPriceArray = newState.filter((product) => {
        return (
          product.price >= parseInt(splitArray[0]) &&
          product.price <= parseInt(splitArray[1])
        );
      });
      return filteredPriceArray;
    } else {
      return newState;
    }
  };

  const filterSortBy = (x, newState) => {
    switch (x) {
      case "Relevant":
        return newState.sort((a, b) => b.comments - a.comments);
      case "Price":
        return newState.sort((a, b) => b.price - a.price);
      case "Rating":
        return newState.sort((a, b) => b.rating - a.rating);
      default:
        break;
    }
  };

  const changeFilters = (newFilter) => {
    let newState = [...initialState];
    newState = filterBasics(newFilter[0]["basic"], newState);
    newState = filterPrice(newFilter[0]["price"], newState);
    newState = filterSortBy(newFilter[0]["sortBy"], newState);
    setFilters(newFilter);
    setProductArray(newState);
  };

  useEffect(() => {
    setInitialState(products);
    setProductArray(products);
    setFilters(initialFilter);
  }, []);

  useEffect(() => {
    if (filters.length > 0) {
      changeFilters(filters);
    }
  }, [filters]);

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
            {productArray.map((product) => (
              <CatalogItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
