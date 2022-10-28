import React from 'react';
import './styleHeader.css';
import Title from '../Title/Title'
import Nav from '../Nav/Nav';

const Header = ({ }) => {
    return (
        <header className='header'>
            <div>
                <img src="/tv-show.png" alt="logo" />
                <Title taille="70px" >Shows Suggestion</Title>
            </div>
            <div>
                <Nav />
            </div>
        </header>
    )
};

export default Header;