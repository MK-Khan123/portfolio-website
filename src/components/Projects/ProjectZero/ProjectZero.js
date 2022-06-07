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

const ProjectZero = () => {
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
                    <SwiperSlide><img src="https://res.cloudinary.com/dn9k2jkdd/image/upload/v1654632388/testo-burger-project/portfolio-slide-image/main-banner_jd4nga.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://res.cloudinary.com/dn9k2jkdd/image/upload/v1654632387/testo-burger-project/portfolio-slide-image/product-details_tvnram.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://res.cloudinary.com/dn9k2jkdd/image/upload/v1654632388/testo-burger-project/portfolio-slide-image/image-gallery_wimo0n.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://res.cloudinary.com/dn9k2jkdd/image/upload/v1654632386/testo-burger-project/portfolio-slide-image/login-page_tctuo1.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://res.cloudinary.com/dn9k2jkdd/image/upload/v1654632388/testo-burger-project/portfolio-slide-image/main-menu_o6ikyo.png" alt="..." /></SwiperSlide>
                    <SwiperSlide><img src="https://res.cloudinary.com/dn9k2jkdd/image/upload/v1654632387/testo-burger-project/portfolio-slide-image/cart_ugcrj0.png" alt="..." /></SwiperSlide>
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
                        Testo Burger (ongoing MERN Stack project)
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
                        A restaurant website where people can order junk food online
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
                                    User can add foods from the homepage (<i><b>Explore Our Menu</b></i> section), <i><b>Our Menu</b></i> tab (at Navbar) and <i><b>All Items</b></i> section under <i><b>Shop</b></i> tab available at Navbar. But he/she needs to login first to proceed to <i><b>Cart</b></i>.
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
                                    Applied Private Route (also known as Protected Route/ Authenticated Route) to restrict convenient access. Implemented Google sign in and Github sign in method using Firebase Authentication. User can also register and sign in using their credentials.
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
                                    The data displayed in the homepage is fetched from MongoDB but for some parts I used static data. Used route parameter to fetch data dynamically from MongoDB and displayed accordingly.
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
                                    Used React Redux for state management of <i><b>Cart</b></i> and handling <i><b>Checkout</b></i> Data. Followed <i><b>Ducks Pattern</b></i> while implementing Redux.
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
                                    User can pay with card (integrated payment gateway method specifically Stripe Payment) while ordering.
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
                                    Exhausted CRUD operations on multiple occasions while building the website.
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
                                    In addition, I used Material UI to make the website device responsive. Furthermore, we deployed the client site on Firebase which can be accessed through the link mentioned below. Server side is deployed using Heroku.
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem sx={{ '::before': { content: 'none' } }}>
                            <TimelineSeparator>
                                <TimelineDot color="error" />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Grid className='project-description'>
                                    Working on to add these features:
                                    <ul>
                                        <li>Sign in using Twitter account.</li>
                                        <li>User can view his/her orders (along with status).</li>
                                        <li>Admin/User differentiation.</li>
                                        <li>Admin will be able to manage Food Items and Placed Orders.</li>
                                        <li>An admin will be capable of adding another user as an admin.</li>
                                    </ul>
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
                        React.js, Material UI, React Router (6.2.1), React Redux, Redux Toolkit, React Stripe JS, MongoDB, Firebase Authentication, Context API, Node.js, Express.js, React Hooks Form, React Swiper JS, Axios, CRUD operations, Heroku, React Reveal, SweetAlert2.
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
                            href='https://github.com/MK-Khan123/testo-burger-client/'
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
                            href='https://github.com/MK-Khan123/testo-burger-server/'
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
                            href='https://testo-burger.web.app/'
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

export default ProjectZero;