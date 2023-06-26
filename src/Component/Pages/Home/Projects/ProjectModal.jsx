import React from 'react';
import { RxCross2 } from "react-icons/rx";

const ProjectModal = (props) => {

    const { id, projectName, projectType, fullScreenShot, projectDetail, projectDescription, technologies, liveLink, gitRepo } = props.project

    const setOpen = props.setOpen
    return (
        <div className='modal-container h-full w-full fixed top-0 left-0 flex justify-center items-center '>

            <div className='modal-overlay absolute top-0 left-0 bottom-0 w-full h-full bg-[#3e3e3e73]  flex items-center justify-center px-6'>


                <div className='modal-content bg-white p-4 md:p-6  w-full md:w-3/5 relative'>

                    <RxCross2 onClick={() => setOpen(false)} className='absolute -top-4 -right-4 text-4xl hover:-rotate-[35deg] transition-transform ease-in-out duration-200 bg-white rounded-full p-2  shadow-md cursor-pointer'></RxCross2>

                    <div className='border h-[350px] overflow-hidden rounded-[10px]'>
                        <a >
                            <img className='w-full hover:-translate-y-[calc(100%-350px)] transition-transform ease-in-out duration-[5s]'
                                src={fullScreenShot} alt="" />
                        </a>
                    </div>

                    <div className='mt-4'>
                        <h2 className='text-xl'> <span className='font-semibold'>{projectName}</span>  - {projectType}</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;