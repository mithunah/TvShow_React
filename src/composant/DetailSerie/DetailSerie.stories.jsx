import React from 'react';
import DetailSerie from './DetailSerie';

export default {
    component: DetailSerie,
    title: 'component/DetailSerie'
};

const Template = (args) => <DetailSerie {...args} />

export const Default = Template.bind({});

Default.args = {
    title: 'Titre de la Card',
    summary: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta diam mi, at pulvinar est malesuada sit amet. Pellentesque ut turpis ac nisi vulputate suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla placerat, nulla vel sodales rhoncus, odio mauris placerat turpis, vel faucibus nisl nibh et ipsum. Donec quis condimentum neque. Praesent ultrices, nisi nec tristique imperdiet, tortor eros mollis ipsum, id auctor dolor mi eget urna. Suspendisse potenti.</p>",
    image: "/tv-show.png",
    children: "Lorem ipsum dolor sit amet",
    genre: ["Drama", "Table", "Head"]
}