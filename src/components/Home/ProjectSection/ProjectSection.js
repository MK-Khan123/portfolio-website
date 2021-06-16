import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './ProjectSection.css';

const projects = [
    {
        id: 1,
        projectImg: 'https://i.ibb.co/949t1mD/city-transport1.png',
        projectTitle: 'City Transport',
        projectDescription: 'A website for booking different transport services across the city',
        codeLink: 'https://github.com/MK-Khan123/city-transport',
        liveSite: 'https://practical-joliot-41cf3a.netlify.app/'
    },
    {
        id: 2,
        projectImg: 'https://i.ibb.co/XD81z21/fullstack1.png',
        projectTitle: 'Grocery House',
        projectDescription: 'A grocery shop website where users can purchase daily essentials',
        codeLink: 'https://github.com/MK-Khan123/fullstack-assignment-client',
        liveSite: 'https://fullstack-assignment.firebaseapp.com/'
    },
    {
        id: 3,
        projectImg: 'https://i.ibb.co/syJZXXR/complete12.png',
        projectTitle: 'City Wheels Auto Shop',
        projectDescription: 'An automotive service oriented website where people can opt for services online',
        codeLink: 'https://github.com/MK-Khan123/complete-website-client',
        liveSite: 'https://complete-website-assignm-474e8.firebaseapp.com/'
    }
];

const ProjectSection = () => {
    return (
        <div style={{ backgroundColor: 'rgba(85, 85, 85, 0.1)' }}>
            <h2 className='text-center p-5'>My Projects</h2>
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    projects.map(project => {
                        const { projectImg, projectTitle, projectDescription, codeLink, liveSite, id } = project;
                        return (
                            <div key={id} className="card m-3 project-card text-white projectCardStyle" style={{ flexBasis: "19rem", backgroundColor: 'rgba(23, 42, 69, 0.9)' }}>
                                <img src={projectImg} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{projectTitle}</h5>
                                    <p className="card-text">{projectDescription}</p>
                                </div>
                                <div className='card-footer'>
                                    <ul className='list-inline'>
                                        <li className='list-inline-item'>
                                            <div>
                                                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                                                    <button className='btn btn-sm btn-outline-info'><FontAwesomeIcon icon={faGithub} /> GitHub</button>
                                                </a>
                                            </div>
                                        </li>
                                        <li className='list-inline-item'>
                                            <div>
                                                <a href={liveSite} target="_blank" rel="noopener noreferrer">
                                                    <button className='btn btn-sm btn-outline-warning'><FontAwesomeIcon icon={faExternalLinkAlt} /> Live Site</button>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default ProjectSection;