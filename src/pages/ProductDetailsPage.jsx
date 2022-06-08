import React from 'react'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Navbar from '../components/Navbar/Navbar'
import Modal from "../components/Modal/Modal";
import CartContext from "../store/cart/CartContext";
import { useContext } from "react";

const ProductDetailsPage = () => {
  const { modal } = useContext(CartContext);

  return (
    <div>
      <Navbar showCartStatus />
      {modal ? <Modal /> : null}
      <ProductDetails/>
    </div>
    
  )
}

export default ProductDetailsPage