import React from 'react';
import { Box, Grid, Typography, Button, Link } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from 'react-reveal/Fade';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

const ProjectOne = () => {
    return (
        <Grid container mt={4} rowSpacing={3}>
            <Grid item xs={12}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper" id='swiper-display'
                >
                    <SwiperSlide><img src="https://i.ibb.co/syJZXXR/complete12.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/wsMPm0y/complete10.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/LxSZYjN/complete11.png" alt="..." /></SwiperSlide>
                </Swiper>
            </Grid>
            <Grid item xs={12}>
                <Fade top>
                    <Typography
                        sx={{
                            fontFamily: 'Varela Round, sans-serif',
                            fontSize: '4rem',
                            color: '#C4CFDE',
                            textAlign: 'center'
                        }}
                        variant="h5"
                        gutterBottom
                        component="div"
                    >
                        City Wheels Auto Shop
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '500',
                            textAlign: 'center',
                            color: "#C4CFDE"
                        }}
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        An automotive service oriented website (MERN stack)
                    </Typography>
                </Fade>
                <Fade right>
                    <Timeline>
                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid className='project-description'>
                                    User can opt for a service from the homepage but he/she needs to login first. Applied Private Route (also known as Protected Route/ Authenticated Route) to restrict convenient access. Implemented Google sign in method using Firebase Authentication.
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>

                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid className='project-description'>
                                    The data displayed in our homepage is fetched from MongoDB but for some parts we used static data. We used route parameter to fetch data dynamically from MongoDB and displayed accordingly.
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid className='project-description'>
                                    User can book a service, can pay with card (integrated payment gateway method specifically Stripe Payment). User can view his/her orders (along with status) and provide reviews which is shown on the review section of the homepage dynamically.
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid className='project-description'>
                                    Exhausted CRUD operations on multiple occasions while building the website. Implemented Admin/User differentiation. Admin can add/remove/status of different services and changes are reflected immediately on the website. Status updates are immediately reflected on User Panel. An admin is capable of adding another user as an admin.
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid className='project-description'>
                                    In addition, we used react bootstrap to make the website device responsive. Furthermore, we deployed our site on Firebase which can be accessed through the above mentioned link to experience the website.
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Fade>
                <Fade left>
                    <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: "#C4CFDE" }} gutterBottom variant="h5" component="div">
                        Technology
                    </Typography>
                    <Typography sx={{ fontFamily: 'Poppins, sans-serif' }} variant="h5" color="#878E99">
                        React.js, React Router, Stripe.js, MongoDB, Firebase Authentication, Context API, React Bootstrap, Node.js, Express.js, React Hooks Form, Axios, CRUD operations, Heroku, Font Awesome.
                    </Typography>
                </Fade>
                <Fade bottom>
                    <Box my={3}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: '1rem',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Link
                            href='https://github.com/MK-Khan123/complete-website-client/'
                            target="_blank"
                            rel="noopener noreferrer"
                            underline='none'
                        >
                            <Button p={4} size='large' variant='contained' color='secondary'>
                                <GitHubIcon />
                                <Box sx={{ pl: 1, fontFamily: 'Poppins, sans-serif' }} component='span'>Client Side Code</Box>
                            </Button>
                        </Link>

                        <Link
                            href='https://github.com/MK-Khan123/complete-website-server/'
                            target="_blank"
                            rel="noopener noreferrer"
                            underline='none'
                        >
                            <Button p={4} size='large' variant='contained' color='secondary'>
                                <GitHubIcon />
                                <Box sx={{ pl: 1, fontFamily: 'Poppins, sans-serif' }} component='span'>Server Side Code</Box>
                            </Button>
                        </Link>

                        <Link
                            href='https://complete-website-assignm-474e8.firebaseapp.com/'
                            target="_blank"
                            rel="noopener noreferrer"
                            underline='none'
                        >
                            <Button size="large" variant='contained' color='warning'>
                                <LaunchIcon />
                                <Box sx={{ pl: 1, fontFamily: 'Poppins, sans-serif' }} component='span'>Live Site</Box>
                            </Button>
                        </Link>
                    </Box>
                </Fade>
            </Grid>
        </Grid >
    );
};

export default ProjectOne;