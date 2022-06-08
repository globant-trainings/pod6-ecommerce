import React from "react";

import Modal from "../components/Modal/Modal";
import CartState from "../store/cart/CartState";

export default {
  title: "Example/Modal",
  component: Modal,
};

const Template = (args) => (
  <CartState>
    <Modal {...args} />
  </CartState>
);

export const Primary = Template.bind({});
Primary.args = {
  value: 0,
};
