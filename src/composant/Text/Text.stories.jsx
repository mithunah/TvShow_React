import React from 'react';
import Text from './Text';

export default {
    component: Text,
    title: 'component/Text'
};

const Template = (args) => <Text {...args} />

export const Default = Template.bind({});

Default.args = {
    content: 'Hola',
    weight: "light"
}

export const Bold = Template.bind({});

Bold.args = {
    content: 'Hola',
    weight: "bolder"
}
