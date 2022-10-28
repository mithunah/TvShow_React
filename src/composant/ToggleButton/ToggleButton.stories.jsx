import React from 'react';
import ToggleButton from './ToggleButton';

export default {
    component: ToggleButton,
    title: 'component/ToggleButton'
};

const Template = (args) => <ToggleButton {...args} />

export const Default = Template.bind({});

Default.args = {
    children: "Déplier",
    summary: 'Découvrir le résumé',
    episodeNb: 4,
}