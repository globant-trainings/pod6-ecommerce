import React from 'react';
import Comments from '../components/Comments/Comments';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Comments component',
  component: Comments,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Comments {...args} />;

export const CommentsComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CommentsComponent.args = {
  numberOfComments: 2,
};

