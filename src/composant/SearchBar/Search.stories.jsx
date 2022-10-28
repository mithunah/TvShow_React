import React from 'react';
import SearchBar from './Search';


export default {
    component: SearchBar,
    title: 'component/SearchBar'
};

const Template = (args) => <SearchBar {...args} />

export const Default = Template.bind({});

