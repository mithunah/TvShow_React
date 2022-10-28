import React from 'react';
import Title from '../Title/Title';
import Summary from '../Summary/Summary';
import Text from '../Text/Text';
import './styleDetailSerie.css'

const DetailSerie = ({ title, image, summary, children }) => {

    return (
        <>
            <section className='drop'>
                <div className='imgDrop'>
                    <img src={image} />
                </div>
                <div className='contentDrop'>
                    <Title>{title}</ Title>
                    <Summary content={summary}></Summary>
                    <Text weight='bold'>{children}</Text>
                </div>
            </section>


        </>

    );

};

export default DetailSerie;