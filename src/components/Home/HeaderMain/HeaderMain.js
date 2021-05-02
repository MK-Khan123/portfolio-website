import React from 'react';
import './HeaderMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import background from '../../../images/background.png';

const backgroundPicture = {
    backgroundImage: `url(${background})`,
    maxWidth: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
};

const HeaderMain = () => {
    return (
        <div style={{ height: '760px' }}>
            <div className='d-flex flex-column align-items-center text-white' style={backgroundPicture}>
                <h1 style={{ paddingTop: '200px' }}>Mehnaz Ahmed Khan</h1>
                <div style={{ color: 'lightgrey' }} className='typewriter'>
                    <h5>React Developer | Programmer | Business Graduate</h5>
                </div>
                <div className='pt-3'>
                    <a style={{ color: '#3b5998' }} className='ps-4' href="https://www.facebook.com/mehnaz.ahmed.5030/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size='3x' />
                    </a>
                    <a style={{ color: '#0e76a8' }} className='ps-4' href="https://www.linkedin.com/in/mehnaz-ahmed-khan31/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size='3x' />
                    </a>
                    <a style={{ color: '#000000' }} className='ps-4' href="https://github.com/MK-Khan123" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size='3x' />
                    </a>
                    <a style={{ color: '#1DA1F2' }} className='ps-4' href="https://twitter.com/MehnazAhmedKha1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} size='3x' />
                    </a>
                </div>
                <div className='pt-3'>
                    <a target='_blank' className='btn btn-danger' rel="noopener noreferrer" href='https://drive.google.com/uc?export=download&id=1MTfkVtREFJNFP_wyXy2DzKuVpJYYOCFf'>Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;