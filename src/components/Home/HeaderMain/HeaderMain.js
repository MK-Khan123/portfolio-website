import React from 'react';
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
            <div style={backgroundPicture}>

            </div>
        </div>
    );
};

export default HeaderMain;