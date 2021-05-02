import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#171717" }}>
            <div className='p-5 ms-3 text-center text-white'>
                <h2>Get in Touch</h2>
                <p>I'd Love to hear from you. For any queries, work samples or if you just want to say hi, fell free to drop a message. I'll try my best to get back to you!</p>
                <Link className='btn btn-outline-light' to='/contact'>Leave a message</Link>
                <div className='mt-3'>
                    <h5 className='text-white mb-4'>Follow Me</h5>
                    <div className='d-flex justify-content-center'>
                        <a className='ps-4 text-white' href="https://www.facebook.com/mehnaz.ahmed.5030/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a className='ps-4 text-white' href="https://twitter.com/MehnazAhmedKha1" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a className='ps-4 text-white' href="https://github.com/MK-Khan123" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className='ps-4 text-white' href="https://www.linkedin.com/in/mehnaz-ahmed-khan31/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-white text-center mb-0' style={{ borderTop: '1px solid gray' }}>Copyright © {(new Date()).getFullYear()} | Designed and built by Mehnaz Ahmed Khan</p>
        </div>
    );
};

export default Footer;