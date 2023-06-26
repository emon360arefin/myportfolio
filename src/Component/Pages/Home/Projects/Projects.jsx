import React, { useEffect, useState } from 'react';
import Heading from '../../../Shared/Heading/Heading';
import Button from '../../../Shared/Button/Button';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('/data/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div id='projects' className='py-16 md:py-20 bg-[#E9F0F8] border-t'>
            <div className='max-w-6xl mx-auto px-2'>
                <Heading>Projects</Heading>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-10'>
                    {
                        projects && projects.map(project => <ProjectCard
                            key={project.id}
                            project={project}
                        ></ProjectCard>)
                    }


                </div>

            </div>
        </div>
    );
};

export default Projects;