import React from 'react'
import './styleTitle.css'

const Title = ({ children, taille }) => {
    return (
        <>
            <h2
                style={{ fontSize: taille }}
            >{children}</h2>
        </>
    )
}

export default Title;