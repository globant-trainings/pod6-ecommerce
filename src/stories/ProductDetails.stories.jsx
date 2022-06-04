import React from 'react';
import ProductDetails from '../components/ProductDetails/ProductDetails';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Product details component',
  component: ProductDetails,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductDetails {...args} />;

export const ProductDetailsComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

ProductDetailsComponent.args = {
  
};

