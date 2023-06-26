import React from 'react';
import Heading from '../../../Shared/Heading/Heading';

const Projects = () => {
    return (
        <div id='projects' className='py-16 md:py-20 bg-[#E9F0F8] border-t'>
            <div className='max-w-6xl mx-auto px-2'>
                <Heading>Projects</Heading>
                <div className='flex flex-col md:flex-row gap-10 mt-10'>

                    {/* Left */}
                    <div className='bg-gradient-to-br from-[#E1E6EC] to-white w-full md:w-1/2 p-[10px]'>
                        <div className='border h-[350px] overflow-hidden rounded-xl'>
                            <img className='w-full hover:-translate-y-[calc(100%-350px)] transition-transform ease-in-out duration-[5s]' src="/LEGOBOTIC.jpg" alt="" />
                        </div>

                        
                    </div>

                    {/* Right */}

                    <div className='bg-gradient-to-br from-[#E1E6EC] to-white w-full md:w-1/2 p-[10px]'>
                        <div className=' border h-[350px] overflow-hidden rounded-xl'>
                            <img className='w-full hover:-translate-y-[calc(100%-350px)] transition-transform ease-in-out duration-[4s]' src="/public/Foodixir.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;