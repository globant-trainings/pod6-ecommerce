import { action } from "@storybook/addon-actions";
import React from 'react';

import CatalogItem from '../components/CatalogItem/CatalogItem';

export default {
  title: 'Component/CatalogItem',
  component: CatalogItem,
  parameters: { actions: { onChange: 'catalog item changed' } },
};

const Template = (args) => <CatalogItem {...args} />;

const handlePriceChange = (x) => {
    console.log(x);
}

const handleSortChange = (x) => {
    console.log(x);
}

export const DesignExample = Template.bind({});
DesignExample.args = {
    pictures: [{image: "https://picsum.photos/200/300"},{image: "https://picsum.photos/200/300?v=1"},{image: "https://picsum.photos/200/300?v=2"}],
    title: "Coffee Maker",
    comments: 2,
    rating: 3.5,
    price:  "$150",
    initialItems: 2
};

export const SingleOption = Template.bind({});
SingleOption.args = {
};