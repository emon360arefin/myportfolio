import React, { useState } from 'react';
import Button from '../../../Shared/Button/Button';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';

const ProjectCard = (props) => {

    const [open, setOpen] = useState(false)

    const { id, projectName, projectType, fullScreenShot, projectDetail, projectDescription, technologies, liveLink, gitRepo } = props.project

    console.log("Props", projectName);
    return (
        <div className='bg-gradient-to-br from-[#E1E6EC] to-white w-full  p-[10px]'>
            <div className='border h-[350px] overflow-hidden rounded-[10px]'>
                <Link onClick={() => setOpen(true)}>
                    <img className='w-full hover:-translate-y-[calc(100%-350px)] transition-transform ease-in-out duration-[5s]'
                        src={fullScreenShot} alt="" />
                </Link>
            </div>

            <div className='mt-4'>
                <h2 className='text-xl'> <span className='font-semibold'>{projectName}</span>  - {projectType}</h2>
            </div>

            <div className='mt-4'>
                <Link onClick={() => setOpen(true)}>
                    <Button >View Detail</Button>
                </Link>

                {
                    open && <div className='flex items-center justify-center px-2'>
                        <ProjectModal
                            project={props?.project}
                            setOpen={setOpen}
                        ></ProjectModal>
                    </div>
                }






            </div>
        </div>
    );
};

export default ProjectCard;