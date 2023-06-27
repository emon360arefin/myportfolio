import React from 'react';
import { render } from "react-dom";
import { Gallery } from 'react-grid-gallery';
import Heading from '../../../Shared/Heading/Heading';
import { photos } from '../../../../../public/data/photos';

const Photography = () => {


    return (
        <div id='photography' className='py-16 md:py-20 bg-[#E9F0F8] border-t'>
            <div className='max-w-6xl mx-auto px-2'>
                <Heading>Photography</Heading>
                <div className='mt-4'>
                    <Gallery photos={photos} />
                </div>
            </div>
        </div>
    );
};

export default Photography;

