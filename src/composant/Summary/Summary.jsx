import React from 'react';


const Summary = ({
    content,
}) => {

    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    )
}

export default Summary;