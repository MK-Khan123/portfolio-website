import React from 'react';
import background from '../../../images/background.png';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Avatar, Box, Grid, Link } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import myPic from '../../../images/myPic.png';
import { Fade } from 'react-reveal';

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
        <Box sx={{ height: 760 }}>
            <Box sx={{ color: 'white' }} style={backgroundPicture}>
                <Grid container spacing={2}>
                    <Grid item xs={0} md={4}>
                        <Fade left>
                            <Box sx={{ textAlign: 'center' }}>
                                <Avatar
                                    sx={{
                                        width: '45.55%',
                                        height: '27.12%',
                                        filter: 'grayScale(30%)',
                                        border: '6px solid #444444',
                                        display: { xs: 'none', md: 'inline-block' },
                                        margin: '9.375rem'
                                    }}
                                    alt="Mehnaz Ahmed"
                                    src={myPic}
                                />
                            </Box>
                        </Fade>
                    </Grid>

                    <Grid sx={{ textAlign: 'center' }} item xs={12} md={8}>
                        <Fade top>
                            <Box
                                sx={{
                                    marginTop: '150px',
                                    fontSize: '3.5rem',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                    fontFamily: 'Varela Round, sans-serif'
                                }}
                                component='h1'
                            >
                                Hi, I'm <Box component='span' color='#00FFFF'>Mehnaz Ahmed Khan</Box>
                            </Box>
                        </Fade>
                        <Fade right>
                            <Box sx={{ color: 'lightgrey', fontSize: '3rem', marginY: '0.5rem', fontFamily: 'Varela Round, sans-serif' }} component='p' >
                                a <Typewriter
                                    words={['Frontend Developer', 'Programmer', 'Technology Enthusiast']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </Box>
                        </Fade>
                        <Box pt={3}>
                            <Link px={3} href="https://www.facebook.com/mehnaz.ahmed.5030/" target="_blank" rel="noopener noreferrer">
                                <FacebookRoundedIcon sx={{ fontSize: 50, color: '#3b5998' }} />
                            </Link>
                            <Link px={3} href="https://www.linkedin.com/in/mehnaz-ahmed-khan/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon sx={{ fontSize: 50, color: '#0e76a8' }} />
                            </Link>
                            <Link px={3} href="mailto:mehnazkhan231@gmail.com" target="_blank" rel="noopener noreferrer">
                                <EmailRoundedIcon sx={{ fontSize: 50, color: '#FFFFFF' }} />
                            </Link>
                            <Link px={3} href="https://github.com/MK-Khan123" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon sx={{ fontSize: 50, color: '#000000' }} />
                            </Link>
                            <Link px={3} href="https://twitter.com/MehnazAhmedKha1" target="_blank" rel="noopener noreferrer">
                                <TwitterIcon sx={{ fontSize: 50, color: '#1DA1F2' }} />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HeaderMain;