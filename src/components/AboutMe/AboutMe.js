import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import myPic from '../../images/myPic.png';
import Navbar from '../Shared/Navbar/Navbar';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    document.title = 'About';

    return (
        <div>
            <Navbar />
            <div className='d-flex flex-column align-items-center text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}>
                <img style={{ width: '200px', paddingTop: '50px' }} src={myPic} alt="" />
                <h1 style={{ paddingTop: '50px' }}>Hi I'm Mehnaz Ahmed Khan</h1>
                <div style={{ color: 'lightgrey' }} className='container text-center'>
                    <h5>A business graduate with a knack for numbers, programming and particularly enthusiastic about web development.</h5>
                    <h5>Passionate towards learning new technologies, encouraging creative thinking and problem-solving.</h5>
                </div>
                <div className='pt-3'>
                    <a style={{ color: '#3b5998' }} className='ps-4' href="https://www.facebook.com/mehnaz.ahmed.5030/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size='3x' />
                    </a>
                    <a style={{ color: '#0e76a8' }} className='ps-4' href="https://www.linkedin.com/in/mehnaz-ahmed-khan31/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size='3x' />
                    </a>
                    <a style={{ color: '#FFFFFF' }} className='ps-4' href="mailto:mehnazkhan231@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} size='3x' />
                    </a>
                    <a style={{ color: '#000000' }} className='ps-4' href="https://github.com/MK-Khan123" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='3x' />
                    </a>
                    <a style={{ color: '#1DA1F2' }} className='ps-4' href="https://twitter.com/MehnazAhmedKha1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size='3x' />
                    </a>
                </div>
                <div className='pt-3'>
                    <a target='_blank' className='btn btn-danger' rel="noopener noreferrer" href='https://drive.google.com/uc?export=download&id=1MTfkVtREFJNFP_wyXy2DzKuVpJYYOCFf'><FontAwesomeIcon icon={faFile} /> Download Resume</a>
                </div>
            </div>
            <div className='row pt-5 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}>
                <div className='col-md-6' style={{ borderRight: '1px solid lightgray' }}>
                    <h3 className='text-center text-decoration-underline'>Skills</h3>
                    <ul className='list-inline ps-5 pt-5'>
                        <h6 className='fst-italic'>Comfortable</h6>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>HTML5</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>CSS3</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>JavaScript</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>ES6</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Bootstrap</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Router</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Hooks</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>CRUD operation</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Firebase authentication</span>
                    </ul>
                    <ul className='list-inline ps-5 pt-5'>
                        <h6 className='fst-italic'>Familiar</h6>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>MongoDB</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Node.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Firebase</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Netlify</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Heroku</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>React Native</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Next.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>SASS</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Redux</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Material UI</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>C/C++ programming language</span>
                    </ul>
                    <ul className='list-inline ps-5 pt-5'>
                        <h6 className='fst-italic'>Tools</h6>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Visual Studio Code</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Node.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Git</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Chrome Dev Tool</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Google Drive</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Sheets</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Next.js</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Docs</span>
                        <span className='ms-2 mb-1 p-2 badge bg-secondary'>Microsoft Office applications (especially Microsoft Excel)</span>
                    </ul>
                </div>
                <div className='col-md-6'>
                    <h3 className='text-center text-decoration-underline'>Education</h3>
                    <ul className='list-inline ps-5 pt-5'>
                        <h6 className='fst-italic'>Undergraduate</h6>
                        <li>North South University</li>
                        <li>Bachelor of Business Administration</li>
                        <li>Major: Finance</li>
                        <li>CGPA: 3.99 on a scale of 4</li>
                    </ul>
                    <ul className='list-inline ps-5 pt-3'>
                        <h6 className='fst-italic'>Higher Secondary Certificate (HSC)</h6>
                        <li>Rajuk Uttara Model College</li>
                        <li>Group: Science</li>
                        <li>GPA 5.00 on a scale of 5.00</li>
                    </ul>
                    <ul className='list-inline ps-5 pt-3'>
                        <h6 className='fst-italic'>Secondary School Certificate (SSC)</h6>
                        <li>Rajuk Uttara Model College</li>
                        <li>Group: Science</li>
                        <li>GPA 5.00 on a scale of 5.00</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;