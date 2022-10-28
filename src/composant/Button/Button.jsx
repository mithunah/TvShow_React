import React from 'react';
import './styleButton.css'

const Button = ({ children, event }) => {
    return (
        <>
            <button
                onClick={event}
                className='btn'
            >
                {children}
            </button>

        </>
    )
}

export default Button;