import React from "react";
import FilterSidebar from "../components/Filters/FilterSidebar";
import Navbar from "../components/Navbar/Navbar";
import CatalogItem from "../components/CatalogItem/CatalogItem";
import { api } from "../utils/constants";
import Modal from "../components/Modal/Modal";
import CartContext from "../store/cart/CartContext";
import { useContext } from "react";
import "./mainPage.css";

const MainPage = () => {
  const { modal } = useContext(CartContext);
  const handlePriceChange = (x) => {
    console.log(x);
  };
  const handleSortChange = (x) => {
    console.log(x);
  };
  const handleBasics = (x) => {
    console.log(x);
  };

  const prices = ["$1 - $50", "$51 - $100", "$101 - $200"];
  const options = ["Relevant", "Price", "Rating"];
  const products = [
    {
      id: "xYerUi",
      name: "Coffee Machine 1",
      price: 919.11,
      quantity: 1,
      comments: 1,
      basic: true,
      image: "/assets/img/1.png",
    },
    {
      id: "mXxTbb",
      name: "Coffee Machine 2",
      price: 919.11,
      quantity: 1,
      comments: 2,
      basic: false,
      image: "/assets/img/1.png",
    },
    {
      id: "c6xueB",
      name: "Coffee Machine 3",
      price: 919.11,
      quantity: 1,
      comments: 2,
      basic: true,
      image: "/assets/img/1.png",
    },
    {
      id: "c1tbl6",
      name: "Coffee Machine 4",
      price: 919.11,
      quantity: 1,
      comments: 2,
      basic: false,
      image: "/assets/img/1.png",
    },
  ];
  const ImageData = [
    {
      image: api + "200/300",
    },
    {
      image: api + "200/300?v=1",
    },
    {
      image: api + "200/300?v=2",
    },
  ];

  return (
    <div>
      <Navbar />
      {modal ? <Modal /> : null}
      <div className="row__MainPage">
        <div className="col__MainPage__20">
          <FilterSidebar
            onChangePrice={() => handlePriceChange()}
            onChangeSort={() => handleSortChange()}
            onChangeBasics={(x) => handleBasics(x)}
            prices={prices}
            options={options}
          />
        </div>
        <div className="col__MainPage__80">
          <h2 className="products__title">Products</h2>
          <div className="catalog__grid">
            {products.map((product) => (
              <CatalogItem
                imageData={ImageData}
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
