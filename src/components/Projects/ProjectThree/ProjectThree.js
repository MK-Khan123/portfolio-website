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

const ProjectThree = () => {
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
                    <SwiperSlide><img src="https://i.ibb.co/949t1mD/city-transport1.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/LC7ppfs/city-transport4.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/gSzzxqk/city-transport5.png" alt="..." /></SwiperSlide>
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
                        City Transport
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
                        A website for booking different transport services
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
                                    User can book tickets based on their preferred ride from the homepage but he/she needs to login first. Applied Private Route (also known as Protected Route/ Authenticated Route) to restrict convenient access. Implemented Google and Facebook sign in method using Firebase Authentication. Users can also create their account (if they don’t have any) and details are stored on Firebase.
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
                                    When user signs in, they can select a ride and by providing ride details, they will be able to see the cost (fakeData) and pick & drop location along with a static map. We generated fakeData in JSON format and used route parameter to display data dynamically, prompted through unique interactions.
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid className='project-description'>
                                    In addition, we used plain bootstrap to make the website device responsive. Furthermore, we deployed our site on Netlify which can be accessed through the above mentioned link to experience the website.
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
                        React.js, React Router 5.2.0, Firebase Authentication, Context API, Bootstrap 5.0, Netlify.
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
                            href='https://github.com/MK-Khan123/city-transport/'
                            target="_blank"
                            rel="noopener noreferrer"
                            underline='none'
                        >
                            <Button p={4} size='large' variant='contained' color='secondary'>
                                <GitHubIcon />
                                <Box sx={{ pl: 1, fontFamily: 'Poppins, sans-serif' }} component='span'>Source Code</Box>
                            </Button>
                        </Link>
                        <Link
                            href='https://practical-joliot-41cf3a.netlify.app/'
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

export default ProjectThree;