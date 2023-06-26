import React from 'react';

const Heading = (props) => {

    const heading = props.children;
    return (
        <h2 className='text-3xl md:text-[32px] text-center font-semibold text-secondary-text'>{heading}</h2>

    );
};

export default Heading;