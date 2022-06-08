import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import CartContext from "../store/cart/CartContext";
import GreenCircleCheckmark from "../assets/green_circle_checkmark.svg"
import "./successpage.css";

const CheckoutPage = () => {
    const { removeFromCart, cartItems } = useContext(CartContext);
    cartItems.map((product) => {
        removeFromCart(product);
    })
    return (
        <div>
            <Navbar showCartStatus={false} />
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <img style={{ width: "300px" }} src={GreenCircleCheckmark} />
                <p style={{ fontSize: "36px", fontWeight: "bold", marginTop: "10px" }}>Congratulations! your order has shipped</p>
            </div>
        </div>
    );
};

export default CheckoutPage;
