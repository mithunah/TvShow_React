import React from 'react';
import Title from './Title';

export default {
    component: Title,
    title: 'component/Title'
};

const Template = (args) => <Title {...args} />

export const Default = Template.bind({});

Default.args = {
    children: 'Hola',
    taille: 12,
}

export const Titre = Template.bind({});
Titre.args = {
    children: 'Les Séries',
    taille: 60,
}