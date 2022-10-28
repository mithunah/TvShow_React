import React from 'react';

const Text = ({
    children,
    weight,
}) => {

    return (
        <p
            style={{ fontFamily: "'Times New Roman', Times, serif", fontWeight: weight }}
        >{children}</p>
    );
};

export default Text;