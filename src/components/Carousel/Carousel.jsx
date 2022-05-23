import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./carousel.css";

const Carousel = ({ imageData }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const goBack = () => {
    setCurrentImage((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const goForward = () => {
    setCurrentImage((prev) =>
      prev === imageData.length - 1 ? prev : prev + 1
    );
  };

  return (
    <div className="carousel">
      <Button
        variant={"primary"}
        className="carousel__leftButton"
        children={"<"}
        onClick={() => goBack()}
        disabled={currentImage === 0 ? true : false}
      />
      {imageData.map((image, index) => (
        <div className="carousel__div">
          {index === currentImage && (
            <img
              className="carousel__image"
              src={image.image}
              alt={image.image}
              lazyLoad
            />
          )}
        </div>
      ))}
      <Button
        variant={"primary"}
        className="carousel__rightButton"
        children={">"}
        onClick={() => goForward()}
        disabled={currentImage === imageData.length - 1 ? true : false}
      />
    </div>
  );
};

Carousel.propTypes = { imageData: PropTypes.array };

export default Carousel;
