import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessPage from "./pages/SuccessPage"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartState from "./store/cart/CartState";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <CartState>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/checkout" exact element={<CheckoutPage/>} />
        <Route path="/checkout/success" exact element={<SuccessPage/>} />
      </Routes>
    </CartState>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
