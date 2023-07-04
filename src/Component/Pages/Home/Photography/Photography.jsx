import React from 'react';
import Heading from '../../../Shared/Heading/Heading';
import "./Photography.css"

const Photography = () => {

    const images = [
        "https://i.ibb.co/LPcK5Tv/1-Stair-to-unknow.jpg",
        "https://i.ibb.co/R7KT5DM/2-CROW-AT-DAWN.jpg",
        "https://i.ibb.co/LSHVTZh/3-Divided.jpg",
        "https://i.ibb.co/FxpLPGy/4-Driver-in-action.jpg",
        "https://i.ibb.co/C0kGDWY/5-Foggy-Morning.jpg",
        "https://i.ibb.co/Vmj0x40/6-Homecoming.jpg",
        "https://i.ibb.co/yBtXRnV/7-NOCTURNAL.jpg",
        "https://i.ibb.co/xSfWTpq/8-Moon-Behind-The-Leaf.jpg",
        "https://i.ibb.co/s1Zy13n/9-ROAMING-IN-A-WINTER-MORNING.jpg",
        "https://i.ibb.co/ZN6BwC1/10-Light-Paint-Flyover.jpg",
        "https://i.ibb.co/RPF9SRr/11-Boat-Man.jpg",
        "https://i.ibb.co/RcZ9Djw/12-Tuntuni.jpg"
    ];


    return (
        <div id='photography' className='py-16 md:py-20 bg-[#E9F0F8] border-t'>
            <div className='max-w-6xl mx-auto px-2'>
                <Heading>Photography</Heading>

                {/* <div className="image-grid mt-4">
                    {images.map((link, index) => (
                        <div className="image" key={index}>
                            <img src={link} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div> */}





                <div className='mt-10 columns-1 md:columns-3'>
                    {
                        images && images.map((image, index) => {
                            return (
                                <div className='py-2 img-container h-full' key={index}> <img className=' img w-full h-auto' src={image} alt="" /> </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Photography;

