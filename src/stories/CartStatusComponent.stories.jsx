import React from "react";

import CartStatusComponent from "../components/cartStatusComponent/CartStatusComponent";

export default {
  title: "Example/CartStatus",
  component: CartStatusComponent,
};

const Template = (args) => <CartStatusComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
