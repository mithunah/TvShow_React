import React from 'react';
import './styleButton.css'

const Button = ({ children, event, type }) => {
    return (
        <>
            <button
                onClick={event}
                className='btn'
                type={type}
            >
                {children}
            </button>

        </>
    )
}

export default Button;