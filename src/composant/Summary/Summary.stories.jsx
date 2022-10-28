import React from 'react';
import Summary from './Summary';

export default {
    component: Summary,
    title: 'component/Summary'
};

const Template = (args) => <Summary {...args} />

export const Default = Template.bind({});

Default.args = {
    content: '<h1>Sky hw</h1><h2>La pluie, le beau temps, le vent, problems, july</h2>',
}
