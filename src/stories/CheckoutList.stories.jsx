import React from "react";

import CheckoutList from "../components/checkoutList/CheckoutList";
import CartState from "../store/cart/CartState";

export default {
  title: "Example/CheckoutList",
  component: CheckoutList,
};

const Template = (args) => (
  <CartState>
    <CheckoutList {...args} />
  </CartState>
);

export const Primary = Template.bind({});
Primary.args = {};
