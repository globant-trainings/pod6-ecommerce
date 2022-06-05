import React from "react";

import Checkout from "../components/Checkout/Checkout";
import CartState from "../store/cart/CartState";

export default {
  title: "Example/Checkout",
  component: Checkout,
};

const Template = (args) => (
  <CartState>
    <Checkout {...args} />
  </CartState>
);

export const Primary = Template.bind({});
Primary.args = {};
