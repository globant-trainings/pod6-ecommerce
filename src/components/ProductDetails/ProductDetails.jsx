import React from 'react'
import Comments from '../Comments/Comments'
import './ProductDetails.css'
import Carousel from '../Carousel/Carousel'
import {useLocation} from 'react-router-dom'
import Rating from '../Rating/Rating'
import CartContext from "../../store/cart/CartContext";
import { useContext } from "react";

const ProductDetails = () => {
  const { addToCart, increase, cartItems } =
  useContext(CartContext);
  const {state} = useLocation();
  const handleAdd = () => {
    if (cartItems.find((item) => item.id === state.product.id)) {
      console.log("increase");
      increase(state.product);
    } else {
      addToCart(state.product);
    }

  };
  return (
    <div className='productDetailsContainer'>
      <Carousel imageData={state.imageData}/>
      <div className='productDetailsContainer--rightSide'>
        <p>
          {state.productName}
        </p>
        <div className='productDetailsContainer--rightSide__ratingAndComments'>
          <Rating rating={state.rating}></Rating>
          <Comments numberOfComments={state.comments}/>
        </div>
        <div className='productDetailsContainer--rightSide__price'>
          <p>${state.price}</p>
          {state.isBasic ? <button>BASIC</button> : null}
        </div>
        <div className='productDetailsContainer--rightSide__description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <p>See more.</p>
        </div>
        <button className='productDetailsContainer--rightSide__addToCart' onClick={handleAdd}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetails