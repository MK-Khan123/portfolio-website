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

const ProjectTwo = () => {
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
                    <SwiperSlide><img src="https://i.ibb.co/XD81z21/fullstack1.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/Sf2bSR4/fullstack2.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/98drzWd/fullstack6.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/KwLtcyw/fullstack3.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/xmhMZPH/fullstack4.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/SQTLvgx/fullstack5.png" alt="..." /></SwiperSlide>
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
                        Grocery House
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
                        A grocery shop website (MERN Stack)
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
                                    User can buy grocery items from the homepage but he/she needs to login first. Applied Private Route (also known as Protected Route/ Authenticated Route) to restrict convenient access. Implemented Google and Facebook sign in method using Firebase Authentication.
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
                                    On the process of buying, a checkout page is loaded by using route parameter to fetch data dynamically from MongoDB and displayed data accordingly. User’s order specific details are stored on MongoDB.
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
                                    Used create, read, and delete of CRUD operations in this project. Unlike using fakeData, this time data displaying in the homepage is fetched from MongoDB. I slightly used React Authentication along with my previous knowledge of React Routing.
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
                                    Admin can add/remove products. When products are added/removed, changes are reflected immediately on the homepage. User can view his/her specific order summary by clicking on <i><b>Orders</b></i> tab.
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid className='project-description'>
                                    In addition, I used plain bootstrap to make the website device responsive (for mobile and desktop version). Furthermore, I deployed the site on Firebase which can be accessed through the link mentioned below.
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
                        React.js, React Router, MongoDB, Firebase Authentication, Context API, Bootstrap 5.0, Node.js, Express.js, React Hooks Form, Axios, CRUD operations, Heroku, Font Awesome.
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
                            href='https://github.com/MK-Khan123/fullstack-assignment-client/'
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
                            href='https://github.com/MK-Khan123/fullstack-assignment-server/'
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
                            href='https://fullstack-assignment.firebaseapp.com/'
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

export default ProjectTwo;