import React from 'react';
import Heading from '../../../Shared/Heading/Heading';

const About = () => {
    return (
        <div id='about' className='pt-10 pb-16 md:pt-8 md:pb-20 bg-[#E9F0F8] '>
            <div className=' max-w-6xl mx-auto px-2'>
                <Heading>About</Heading>

                <div className='mt-12 flex flex-col-reverse md:flex-row gap-8'>
                    <div className='w-full md:w-7/12 flex flex-col justify-center'>
                        <p className='text-[#637289] text-center md:text-left leading-loose'>As a front-end developer, I bring a strong passion for creating engaging and user-friendly web experiences. With expertise in HTML, CSS, JavaScript, React.js, Express.js, Tailwind CSS and many more, I am well-equipped to tackle modern web development challenges.

                            With over 150 projects completed on Fiverr, I have achieved  Level 2 seller status with a consistent 5-star rating. Specializing in WordPress websites using the Elementor Page Builder, I have honed my design skills and delivered tailored solutions that exceed client expectations.</p>

                        <div className='flex flex-wrap gap-6 md:gap-10 justify-center items-center mt-6'>
                            <img className='w-12 h-12' src="/Resized/html.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/css.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/js.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/bootstrap.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/tailwind.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/react.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/node.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/express.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/mongo.png" alt="" />
                            <img className='w-12 h-12' src="/Resized/fiverr Level  2 b.png" alt="" />
                        </div>
                    </div>

                    <div className='w-full md:w-5/12'>
                        <img className='w-full' src="/profile-2.jpg" alt="" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;