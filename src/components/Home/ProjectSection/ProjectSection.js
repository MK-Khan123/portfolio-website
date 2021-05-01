import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
    {
        projectImg: 'https://ibb.co/pKvyM67',
        projectTitle: 'City Transport',
        projectDescription: 'A website for booking different transport services across the city',
        technology: ['React.js', 'React Router', 'Firebase', 'BootStrap 5.0']
    },
    {
        projectImg: 'https://ibb.co/ZSm5hL5',
        projectTitle: 'Grocery House',
        projectDescription: 'A grocery shop website where users can purchase daily essentials',
        technology: ['React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'BootStrap 5.0']
    },
    {
        projectImg: 'https://ibb.co/0Y0MnT5',
        projectTitle: 'City Wheels Auto Shop',
        projectDescription: 'An automotive service oriented website where people can opt for services online',
        technology: ['React.js', 'React Router', 'Node.js', 'Express.js', 'MongoDB', 'Stripe.js', 'BootStrap 5.0']
    }
];

const ProjectSection = () => {
    return (
        <div style={{ backgroundColor: 'rgba(85, 85, 85, 0.2)' }}>
            <h2 className='text-center p-5' >My Projects</h2>
            <div className="card" style="width: 18rem;">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;