import { action } from "@storybook/addon-actions";
import React from 'react';

import FilterPrices from '../components/Filters/FilterPrices';

export default {
  title: 'Component/FilterPrices',
  component: FilterPrices,
  parameters: { actions: { onChange: 'price filter changed' } },
};

const Template = (args) => <FilterPrices {...args} />;

const handleChange = (x) => {
    console.log(x);
}

export const DesignExample = Template.bind({});
DesignExample.args = {
  prices: ["$1 - $50", "$51 - $100", "$101 - $200"],
  onChange: action("onChange", handleChange),
};

export const SingleOption = Template.bind({});
SingleOption.args = {
    prices: ["$1 - $200"],
    onChange: action("onChange", handleChange),
};