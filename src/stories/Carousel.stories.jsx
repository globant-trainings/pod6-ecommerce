import React from "react";

import Carousel from "../components/Carousel/Carousel";
import { api } from "../utils/constants";

export default {
  title: "Example/Carousel",
  component: Carousel,
};

const ImageData = [
  {
    image: api + "200/300",
  },
  {
    image: api + "200/300?v=1",
  },
  {
    image: api + "200/300?v=2",
  },
];

const Template = (args) => <Carousel {...args} />;

export const MultipleImages = Template.bind({});
MultipleImages.args = {
  imageData: ImageData,
};

export const NoImages = Template.bind({});
NoImages.args = {
  imageData: [],
};
