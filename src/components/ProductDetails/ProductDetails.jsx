import React from 'react'
import CoffeeMaker from './assets/coffee.png'
import Comments from '../Comments/Comments'
import './ProductDetails.css'
const ProductDetails = () => {
  return (
    <div className='productDetailsContainer'>
      <img src={CoffeeMaker} alt="Coffee maker"/>
      <div className='productDetailsContainer--rightSide'>
        <p>
          Coffee Maker
        </p>
        <div className='productDetailsContainer--rightSide__ratingAndComments'>
          <p>
            Rating
          </p>
          <Comments numberOfComments={22}/>
        </div>
        <div className='productDetailsContainer--rightSide__price'>
          <p>$105</p>
          <button>BASIC</button>
        </div>
        <div className='productDetailsContainer--rightSide__description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna 
aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
          <p>See more.</p>
        </div>
        <button className='productDetailsContainer--rightSide__addToCart'>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDetails