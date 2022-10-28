import React from 'react';
import Button from './Button';

export default {
    component: Button,
    title: 'component/Button'
};

const Template = (args) => <Button {...args} />

export const Default = Template.bind({});

Default.args = {
    children: "Click Here",
}