import React from "react";

import Carousel from "../components/Carousel/Carousel";
import coffee from "../assets/coffee.png";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Carousel",
  component: Carousel,
};

const ImageData = [
  {
    image: coffee,
  },
  {
    image: coffee,
  },
  {
    image: coffee,
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  imageData: ImageData,
};
