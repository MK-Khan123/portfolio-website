import React from 'react';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import myPic from '../../images/myPic.png';
import Navbar from '../Shared/Navbar/Navbar';

const AboutMe = () => {
    document.title = 'About';

    return (
        <div>
            <Navbar />
            <div>
                <img style={{ width: '200px', paddingTop: '50px' }} src={myPic} alt="" />
                <h1 style={{ paddingTop: '50px' }}>Hi I'm Mehnaz Ahmed Khan</h1>
                <div style={{ color: 'lightgrey' }}>
                    <h5>A business graduate with a knack for numbers, programming and particularly enthusiastic about web development.</h5>
                    <h5>Passionate towards learning new technologies, encouraging creative thinking and problem-solving.</h5>
                </div>
                <div>
                    <a style={{ color: '#3b5998' }} href="https://www.facebook.com/mehnaz.ahmed.5030/" target="_blank" rel="noopener noreferrer">
                        <FacebookRoundedIcon sx={{ fontSize: 50, color: '#3b5998' }} />
                    </a>
                    <a style={{ color: '#0e76a8' }} href="https://www.linkedin.com/in/mehnaz-ahmed-khan31/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ fontSize: 50, color: '#0e76a8' }} />
                    </a>
                    <a style={{ color: '#FFFFFF' }} href="mailto:mehnazkhan231@gmail.com" target="_blank" rel="noopener noreferrer">
                        <EmailRoundedIcon sx={{ fontSize: 50, color: '#FFFFFF' }} />
                    </a>
                    <a style={{ color: '#000000' }} href="https://github.com/MK-Khan123" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ fontSize: 50, color: '#000000' }} />
                    </a>
                    <a style={{ color: '#1DA1F2' }} href="https://twitter.com/MehnazAhmedKha1" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon sx={{ fontSize: 50, color: '#1DA1F2' }} />
                    </a>
                </div>
                <div>
                    <a target='_blank' rel="noopener noreferrer" href='https://drive.google.com/uc?export=download&id=1MTfkVtREFJNFP_wyXy2DzKuVpJYYOCFf'><FileDownloadRoundedIcon /> Download Resume</a>
                </div>
            </div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.90)' }}>
                <div style={{ borderRight: '1px solid lightgray' }}>
                    <h3>Skills</h3>
                    <ul>
                        <h6>Comfortable</h6>
                        <span>HTML5</span>
                        <span>CSS3</span>
                        <span>JavaScript</span>
                        <span>ES6</span>
                        <span>React.js</span>
                        <span>Bootstrap</span>
                        <span>React Router</span>
                        <span>React Hooks</span>
                        <span>CRUD operation</span>
                        <span>Firebase authentication</span>
                    </ul>
                    <ul>
                        <h6>Familiar</h6>
                        <span>MongoDB</span>
                        <span>Node.js</span>
                        <span>Firebase</span>
                        <span>Netlify</span>
                        <span>Heroku</span>
                        <span>React Native</span>
                        <span>Next.js</span>
                        <span>SASS</span>
                        <span>Redux</span>
                        <span>Material UI</span>
                        <span>C/C++ programming language</span>
                    </ul>
                    <ul>
                        <h6>Tools</h6>
                        <span>Visual Studio Code</span>
                        <span>Node.js</span>
                        <span>Git</span>
                        <span>Chrome Dev Tool</span>
                        <span>Google Drive</span>
                        <span> Sheets</span>
                        <span>Next.js</span>
                        <span>Docs</span>
                        <span>Microsoft Office applications (especially Microsoft Excel)</span>
                    </ul>
                </div>
                <div>
                    <h3>Education</h3>
                    <ul>
                        <h6>Undergraduate</h6>
                        <li>North South University</li>
                        <li>Bachelor of Business Administration</li>
                        <li>Major: Finance</li>
                        <li>CGPA: 3.99 on a scale of 4</li>
                    </ul>
                    <ul>
                        <h6>Higher Secondary Certificate (HSC)</h6>
                        <li>Rajuk Uttara Model College</li>
                        <li>Group: Science</li>
                        <li>GPA 5.00 on a scale of 5.00</li>
                    </ul>
                    <ul>
                        <h6>Secondary School Certificate (SSC)</h6>
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