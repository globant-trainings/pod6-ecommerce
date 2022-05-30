import React from "react";

import CartStatus from "../components/CartStatus/CartStatus";

export default {
  title: "Example/CartStatus",
  component: CartStatus,
};

const Template = (args) => <CartStatus {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 0,
};
