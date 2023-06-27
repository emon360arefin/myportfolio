import React from 'react';
import { RxCross2 } from "react-icons/rx";
import Button from '../../../Shared/Button/Button';
import { Link } from 'react-router-dom';

const ProjectModal = (props) => {

    const { id, projectName, projectType, fullScreenShot, projectDetail, projectDescription, technologies, liveLink, gitRepo } = props.project

    const setOpen = props.setOpen
    return (
        <div className='modal-container h-full w-full fixed top-0 left-0 flex justify-center items-center z-20'>

            <div className='modal-overlay absolute top-0 left-0 bottom-0 w-full h-full bg-[#3e3e3e73]  flex items-center justify-center px-6'>


                <div className='modal-content bg-white p-4 md:p-6  w-full md:w-3/5 relative'>

                    <RxCross2 onClick={() => setOpen(false)} className='absolute -top-4 -right-4 text-4xl hover:-rotate-[35deg] transition-transform ease-in-out duration-200 bg-white rounded-full p-2  shadow-md cursor-pointer'></RxCross2>

                    <div className='border h-[250px] md:h-[400px] overflow-hidden rounded-[10px]'>
                        <a >
                            <img className='w-full hover:-translate-y-[calc(100%-350px)] transition-transform ease-in-out duration-[5s]'
                                src={fullScreenShot} alt="" />
                        </a>
                    </div>

                    <div className='mt-4'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <h2 className='text-lg md:text-2xl'> <span className='font-semibold'>{projectName}</span>  - {projectType}</h2>

                            <div className='flex mt-2 md:mt-0 gap-8 w-full md:w-1/3 justify-start md:justify-end'>

                                <a className='w-full md:w-1/2' target="_blank" rel='noreferrer' href={liveLink}>
                                    <Button>Live Site</Button>
                                </a>

                                {
                                    gitRepo && <a className='w-full md:w-1/2' target="_blank" rel='noreferrer' href={gitRepo} >
                                        <Button>GitHub</Button>
                                    </a>
                                }
                            </div>
                        </div>

                        <ul className='ml-6 mt-2'>
                            {projectDetail && projectDetail.map((detail, index) => <li
                                key={index}
                                className='list-disc'
                            >{detail}</li>)}
                        </ul>

                        <ul className='flex justify-start items-center gap-6 mt-4'>
                            {technologies && technologies.map((tech, index) => <li key={index}> <img className='w-12' src={tech} alt="" />  </li>)}
                        </ul>

                        <p className='mt-4'>{projectDescription}</p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectModal;