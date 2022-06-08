import React from "react";
import PropTypes from "prop-types";
import AddSubstract from "../AddSubstract/AddSubstract";
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import Comments from "../Comments/Comments";
import Rating from "../Rating/Rating";

import "./catalogitem.css";

const CatalogItem = ({ product, rating, initialItems }) => {
  const handleOnAdd = (e) => {
    console.log(e);
  };
  const handleOnSubstract = (e) => {
    console.log(e);
  };

  return (
    <div
      className={product.basic ? "" : "catalogItem__container"}
      data-testid="catalog-item"
    >
      {product.basic ? (
        <div className="basic__container">
          <p>basic</p>
        </div>
      ) : (
        ""
      )}
      <Carousel imageData={product.images}></Carousel>
      <p className="title-wrapper">{product.name}</p>
      <div className="rating-comments-wrapper">
        <Rating rating={rating}></Rating>
        <div className="comments-wrapper">
          <Comments numberOfComments={product.comments}></Comments>
        </div>
      </div>
      <p className="price-wrapper">${product.price}</p>
      <div className="button-wrapper">
        <Button
          variant={"primary"}
          size={"large"}
          children={"See details"}
        ></Button>
      </div>
      <div className="button-wrapper">
        <AddSubstract
          product={product}
          initialCount={initialItems}
          limitCount={10}
          onAdd={handleOnAdd}
          onSubstract={handleOnSubstract}
          variant="secondary"
        ></AddSubstract>
      </div>
    </div>
  );
};

CatalogItem.propTypes = {
  product: PropTypes.object,
  imageData: PropTypes.array,
  title: PropTypes.string,
  comments: PropTypes.number,
  rating: PropTypes.number,
  price: PropTypes.string,
  initialItems: PropTypes.number,
};

export default CatalogItem;
