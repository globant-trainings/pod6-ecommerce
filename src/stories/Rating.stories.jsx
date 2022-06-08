import React from 'react';

import Rating from '../components/Rating/Rating';

export default {
  title: 'Component/Rating',
  component: Rating,
};

const Template = (args) => <Rating {...args} />;

export const FullStars = Template.bind({});
FullStars.args = {
  rating: 3
};

export const HalfStar = Template.bind({});
HalfStar.args = {
  rating: 3.5
};