import React from 'react';
import Nav from './Nav';

export default {
    component: Nav,
    title: 'component/Nav',
};

const Template = (args) => <Nav {...args} />

export const Default = Template.bind({});