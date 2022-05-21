import React from "react";

import Carousel from "../components/Carousel/Carousel";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Carousel",
  component: Carousel,
};

const ImageData = [
  {
    image:
      "https://images.unsplash.com/photo-1546190255-451a91afc548?ixlib=rb-1.2.1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-1.2.1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1",
  },
  {
    image:
      "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-1.2.1",
  },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  imageData: ImageData,
};
