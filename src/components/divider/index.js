import React from 'react';
import './divider.css';

const Divider = ({ border, id }) => {
    return (
        <hr id={id} className={border} />
    );
}

export default Divider;