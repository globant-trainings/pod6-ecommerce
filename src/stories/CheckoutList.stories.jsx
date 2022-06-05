import React from "react";

import CheckoutList from "../components/checkoutList/CheckoutList";
import CartState from "../store/cart/CartState";

export default {
  title: "Example/CheckoutList",
  component: CheckoutList,
};

const products = [
  {
    id: 1,
    name: "Coffee Machine 1",
    price: 919.11,
    quantity: 1,
    image: "../../assets/coffee.png",
  },
  {
    id: 2,
    name: "Coffee Machine 2",
    price: 1257.92,
    quantity: 2,
    image: "/assets/img/2.png",
  },
  {
    id: 3,
    name: "Coffee Machine 3",
    price: 1500.85,
    quantity: 1,
    image: "/assets/img/3.png",
  },
];

const Template = (args) => (
  <CartState>
    <CheckoutList {...args} />
  </CartState>
);

export const Primary = Template.bind({});
Primary.args = {
  products: products,
};
