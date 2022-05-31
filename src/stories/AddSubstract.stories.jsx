import { action } from "@storybook/addon-actions";
import React from "react";
import CartState from "../store/cart/CartState";
import AddSubstract from "../components/AddSubstract/AddSubstract";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/AddSubstract",
  component: AddSubstract,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <CartState>
    <AddSubstract {...args} />
  </CartState>
);

const onAdd = (newCount) => {
  console.log(onAdd);
};

const onSubstract = (newCount) => {
  console.log(onSubstract);
};

const product = {
  id: 1,
  name: "Coffee Machine 1",
  price: 919.11,
  image: "/assets/img/1.png",
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "secondary",
  initialCount: 0,
  limitCount: 10,
  onAdd: action("onAdd", onAdd),
  product: product,
  onSubstract: action("onSubstract", onSubstract),
};
