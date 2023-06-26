import React from 'react';

const Button = (props) => {

    return (
        <button className='flex justify-center items-center  w-full bg-[#637289] hover:bg-[#586377] transition-colors ease-in-out duration-300 text-white h-8'>
            {props.children}
        </button>
    );
};

export default Button;