import React from 'react';
import Pagination from '../components/Pagination/Pagination';

const getItems = () => {
  console.log('refetched')
}
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pagination component',
  component: Pagination,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Pagination {...args} />;

export const PaginationComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

PaginationComponent.args = {
  getItems,
};

