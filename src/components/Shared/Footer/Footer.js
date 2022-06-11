import { Box } from '@mui/material';
import React from 'react';
import { Fade } from 'react-reveal';

const Footer = () => {
    return (
        <Fade bottom>
            <Box
                sx={{
                    borderTop: '3px solid #970C0C',
                    color: 'white',
                    fontSize: '1.2rem',
                    paddingY: '15px',
                    textAlign: 'center'
                }}
            >
                Copyright © {(new Date()).getFullYear()} | Built by Mehnaz Ahmed Khan
            </Box >
        </Fade>
    );
};

export default Footer;