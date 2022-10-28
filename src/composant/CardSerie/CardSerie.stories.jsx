import React from 'react';
import CardSerie from './CardSerie';
import logo from '../../logo.svg';

export default {
    component: CardSerie,
    title: 'component/CardSerie'
};

const Template = (args) => <CardSerie {...args} />

export const Default = Template.bind({});

Default.args = {
    title: 'Titre de la Card',
    premiere: "2020-10-07",
    end: "2019-10-06",
    image: logo,
}