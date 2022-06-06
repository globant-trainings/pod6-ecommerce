import { action } from "@storybook/addon-actions";
import React from 'react';

import FilterSidebar from '../components/FilterSidebar/FilterSidebar';

export default {
  title: 'Component/FilterSidebar',
  component: FilterSidebar,
  parameters: { actions: { onChange: 'sidebar filter changed' } },
};

const Template = (args) => <FilterSidebar {...args} />;

const handlePriceChange = (x) => {
    console.log(x);
}

const handleSortChange = (x) => {
    console.log(x);
}

export const DesignExample = Template.bind({});
DesignExample.args = {
  prices: ["$1 - $50", "$51 - $100", "$101 - $200"],
  options: ["Relevant", "Price", "Rating"],
  onChangePrice: action("onChangePrice", handlePriceChange),
  onChangeSort: action("onChangeSort", handleSortChange)
};

export const SingleOption = Template.bind({});
SingleOption.args = {
  prices: ["$1 - $50"],
  options: ["Relevant"],
  onChangePrice: action("onChangePrice", handlePriceChange),
  onChangeSort: action("onChangeSort", handleSortChange)
};