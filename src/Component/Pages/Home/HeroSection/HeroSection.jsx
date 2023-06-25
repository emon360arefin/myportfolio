import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div id='home' className="relative h-full md:h-full bg-[#EEF3F7]">
                {/* <img className='cover' src="/Overlay 3.png" alt="" /> */}

                <div className="bg-[url('/overlay-4.png')] opacity-90 bg-left-bottom bg-no-repeat bg-cover h-screen">

                </div>
                <div className='max-w-6xl mx-auto px-2   gap-4 md:gap-6 absolute top-0 right-0 left-0 py-20 flex flex-col items-center justify-center  h-full '>
                    <h2 className='text-3xl md:text-[32px] font-semibold text-secondary-text'>Meet</h2>

                    <h2 className='text-3xl md:text-[42px] font-semibold text-primary-heading'>Emon Arefin</h2>

                    <h2 className='text-[16px] text-secondary-text'>Front End Developer</h2>

                    <div className='flex gap-6 mt-6 -ml-1'>

                        <a className='flex items-center justify-center' target="_blank" rel='noreferrer' href="https://web.facebook.com/emonarefinwebd/">
                            <img className='w-12 hover:-translate-y-[6px] transition-transform ease-in-out duration-500 cursor-pointer' src="/facebook.svg" alt="" />
                        </a>

                        <a className='flex items-center justify-center' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/webdeveloperemon/">
                            <img className='w-12 hover:-translate-y-[6px] transition-transform ease-in-out duration-500 cursor-pointer' src="/linkedin.svg" alt="" />
                        </a>

                        <a className='flex items-center justify-center' target="_blank" rel='noreferrer' href="https://github.com/emon360arefin">
                            <img className='w-[52px] hover:-translate-y-[6px] transition-transform ease-in-out duration-500 cursor-pointer' src="/github.svg" alt="" />
                        </a>

                        <a className='flex items-center justify-center' target="_blank" rel='noreferrer' href="https://www.fiverr.com/emon_arefin">
                            <img className='w-10 ml-1 hover:-translate-y-[6px] transition-transform ease-in-out duration-500 cursor-pointer' src="/fiverr.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;