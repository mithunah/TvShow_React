import React from 'react';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Text from '../Text/Text';

import './style.css';
import { Link } from 'react-router-dom';

const CardSerie = ({
    title,
    premiere,
    end,
    image,
    serieID
}) => {

    return (
        <section style={{ backgroundImage: `url(${image})` }} className="card">
            <div className='overlay'>
                <Title taille="large">{title}</Title>
                <Text>{`Diffusion: ${premiere} ~ ${end}`}</Text>
                <Button>
                    <Link to={`/serie/${serieID}`} >En savoir plus</Link>
                </Button>
            </div>
        </section>
    )
}

export default CardSerie;