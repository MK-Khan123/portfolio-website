import { Box } from '@mui/material';
import React from 'react';


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
            Copyright © {(new Date()).getFullYear()} | Built by Mehnaz Ahmed Khan
        </Box >
    );
};

export default Footer;