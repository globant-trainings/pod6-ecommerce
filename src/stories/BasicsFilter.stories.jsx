import React from 'react';
import BasicsFilter from '../components/Filters/BasicsFilter'
import { setBasicsOn } from '../App'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Basics filter component',
  component: BasicsFilter,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BasicsFilter {...args} />;

export const CommentsComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

CommentsComponent.args = {
  setBasicsOn,
};

