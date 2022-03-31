import { Box } from '@mui/material';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import { ReactComponent as MySvg } from '../../../images/up-arrow.svg';


const Footer = () => {
    return (
        <Box
            sx={{
                borderTop: '3px solid #970C0C',
                color: 'white',
                fontSize: '1.2rem',
                paddingY: '15px',
                textAlign: 'center'
            }}
        >
            <ScrollToTop style={{ borderRadius: '20px', backgroundColor: 'cyan' }} smooth top={200} component={<MySvg />} />
            Copyright © {(new Date()).getFullYear()} | Built by Mehnaz Ahmed Khan
        </Box >
    );
};

export default Footer;