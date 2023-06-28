import React from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#E1E6EC] py-16 md:py-20'>
            <div className='max-w-6xl mx-auto px-2 flex flex-col items-center justify-center'>
                <img className='w-[42%] md:w-1/5' src="/Signature.png" alt="" />

                <div className='flex flex-col md:flex-row md:justify-between  w-full border-t border-white pt-8 gap-10'>
                    {/* Left */}
                    <div className=' flex flex-col gap-4 items-center md:items-start'>
                        <h2 className='text-xl font-semibold text-[#637289]'>HAVE QUESTIONS?</h2>

                        <div className='flex flex-col items-center md:items-start'>
                            <div className='flex items-center gap-4'>
                                <FaPhoneAlt className='text-[#637289] text-sm'></FaPhoneAlt>
                                <h2>+8801998192226</h2>
                            </div>

                            <div className='flex items-center gap-4'>
                                <FaEnvelope className='text-[#637289] text-sm'></FaEnvelope>
                                <h2>webdesign.emon@gmail.com</h2>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='flex flex-col items-center md:items-end'>
                        <h2 className='text-xl font-semibold text-[#637289]'>FIND ME ON</h2>

                        <div className='flex gap-6 mt-6 -ml-1'>

                            <a className='flex items-center justify-center' target="_blank" rel='noreferrer' href="https://web.facebook.com/emonarefinwebd/">
                                <img className='w-10 hover:-translate-y-[6px] transition-transform ease-in-out duration-500 cursor-pointer' src="/facebook.svg" alt="" />
                            </a>

                            <a className='flex items-center justify-center' target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/webdeveloperemon/">
                                <img className='w-10 hover:-translate-y-[6px] transition-transform ease-in-out duration-500 cursor-pointer' src="/linkedin.svg" alt="" />
                            </a>

                            <a className='flex items-center justify-center' target="_blank" rel='noreferrer' href="https://github.com/emon360arefin">
                                <img className='w-[44px] hover:-translate-y-[6px] transition-transform ease-in-out duration-500 cursor-pointer' src="/github.svg" alt="" />
                            </a>

                            <a className='flex items-center justify-center' target="_blank" rel='noreferrer' href="https://www.fiverr.com/emon_arefin">
                                <img className='w-[34px] ml-1 hover:-translate-y-[6px] transition-transform ease-in-out duration-500 cursor-pointer' src="/fiverr.svg" alt="" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;