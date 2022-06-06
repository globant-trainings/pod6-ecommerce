import React from 'react';
import { action } from "@storybook/addon-actions";
import BasicsFilter from '../components/Filters/BasicsFilter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Basics filter component',
    component: BasicsFilter,
    parameters: { actions: { onChange: 'basics changed' } },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BasicsFilter {...args} />;

const setBasicsOn = (isBasicFilterOn) => {
    console.log(isBasicFilterOn);
}
export const CommentsComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

CommentsComponent.args = {
    setBasicsOn: action("Basics is", setBasicsOn),
};