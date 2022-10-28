import React from 'react';
import Title from '../Title/Title';
import Summary from '../Summary/Summary';
import Text from '../Text/Text';
import './styleDetailSerie.css'

const DetailSerie = ({ title, image, summary, children, genre }) => {

    return (
        <>
            <section className='drop'>
                <div className='imgDrop'>
                    <img src={image} />
                </div>
                <div className='contentDrop'>
                    <Title>{title}</ Title>
                    <div className='genre'>
                    {genre.map((sgenre, index)=>
                        <p key={index}> {index===genre.length-1 ? ` ${sgenre} ` :` ${sgenre}, `} </p>)}
                    </div>
                    <Summary content={summary}></Summary>
                    <Text weight='bold'>{children}</Text>
                    
                </div>
            </section>


        </>

    );

};

export default DetailSerie;