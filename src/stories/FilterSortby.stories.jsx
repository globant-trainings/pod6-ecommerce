import { action } from "@storybook/addon-actions";
import React from 'react';

import FilterSortby from '../components/FilterSortby/FilterSortby';

export default {
  title: 'Component/FilterSortby',
  component: FilterSortby,
  parameters: { actions: { onChange: 'sortby filter changed' } },
};

const Template = (args) => <FilterSortby {...args} />;

const handleChange = () => {
    console.log();
}

export const DesignExample = Template.bind({});
DesignExample.args = {
  options: ["Relevant", "Price", "Rating"],
  onChange: action("onChange", handleChange),
};

export const DualOption = Template.bind({});
DualOption.args = {
    options: ["Relevant", "Second"],
    onChange: action("onChange", handleChange),
};