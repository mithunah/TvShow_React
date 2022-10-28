import React, { useState } from 'react';
import Summary from '../Summary/Summary';
import Text from '../Text/Text';
import './styleButton.css'

const ToggleButton = ({ children, summary, episodeNb }) => {
    const [shown, setShow] = useState(false);

    return (
        <>
            <button
                onClick={() => setShow(!shown)}
                className={'toggle'}
            >
                {children}
            </button>
            {shown &&
                <section className='toggleSeason'>
                    <Text weight='bold'>Number of episodes: {episodeNb}</Text>
                    <Summary content={summary}></Summary>
                </section>
            }
        </>
    )
}

export default ToggleButton;