import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div id='home' className="relative h-full md:h-full bg-[#EEF3F7]">
                {/* <img className='cover' src="/Overlay 3.png" alt="" /> */}

                <div className="bg-[url('/overlay-3.png')] bg-left-bottom bg-no-repeat bg-cover h-[700px]">

                </div>
                <div className='max-w-6xl mx-auto px-2   gap-4 md:gap-6 absolute top-0 right-0 left-0 py-20 flex flex-col items-center justify-center  h-full border-2 bg-fixed'>
                    <h2 className='text-3xl md:text-[32px] font-semibold text-secondary-text'>Meet</h2>

                    <h2 className='text-3xl md:text-[42px] font-semibold text-primary-heading'>Emon Arefin</h2>

                    <h2 className='text-[16px] text-secondary-text'>Front End Developer</h2>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;