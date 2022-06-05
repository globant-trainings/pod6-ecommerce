import React from "react";

import CartStatus from "../components/CartStatus/CartStatus";
import CartState from "../store/cart/CartState";

export default {
  title: "Example/CartStatus",
  component: CartStatus,
};

const Template = (args) => (
  <CartState>
    <CartStatus {...args} />
  </CartState>
);

export const Primary = Template.bind({});
Primary.args = {
  value: 0,
};
