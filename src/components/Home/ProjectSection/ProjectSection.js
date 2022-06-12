import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';

const projectData = [
    {
        id: 1,
        projectImg: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1654632388/testo-burger-project/portfolio-slide-image/main-banner_jd4nga.png',
        projectTitle: 'Testo Burger (ongoing)',
        projectDescription: 'A restaurant website where people can order junk food online',
        codeLink: 'https://github.com/MK-Khan123/testo-burger-client',
        liveSite: 'https://testo-burger.web.app/home'
    },
    {
        id: 2,
        projectImg: 'https://i.ibb.co/Phj9q74/complete1.png',
        projectTitle: 'City Wheels Auto Shop',
        projectDescription: 'An automotive service oriented website where people can opt for services online',
        codeLink: 'https://github.com/MK-Khan123/complete-website-client',
        liveSite: 'https://complete-website-assignm-474e8.firebaseapp.com/'
    },
    {
        id: 3,
        projectImg: 'https://i.ibb.co/XD81z21/fullstack1.png',
        projectTitle: 'Grocery House',
        projectDescription: 'A grocery shop website where users can purchase daily essentials',
        codeLink: 'https://github.com/MK-Khan123/fullstack-assignment-client',
        liveSite: 'https://fullstack-assignment.firebaseapp.com/'
    }
];

const ProjectSection = () => {
    return (
        <Container id='projects' sx={{ paddingBottom: 5, borderBottom: '3px solid #970C0C' }}>
            <Fade top>
                <Box
                    component='h2'
                    color='#C4CFDE'
                    sx={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Varela Round, sans-serif' }}
                >
                    My Projects
                </Box>
            </Fade>
            <Box sx={{ flexGrow: 1 }} component='div'>
                <Grid container columnSpacing={3} rowSpacing={6} justifyContent='center'>
                    {
                        projectData.map(project => {
                            const { projectImg, projectTitle, projectDescription, codeLink, liveSite, id } = project;
                            return (
                                <Grid
                                    key={id}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    item
                                    md={4}
                                    sm={12}
                                >
                                    <Fade bottom>
                                        <Card sx={{ maxWidth: 410, boxShadow: 6, borderRadius: 2, backgroundColor: '#212428' }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="250"
                                                    image={projectImg}
                                                    alt="project image"
                                                />
                                                <CardContent>
                                                    <Typography sx={{ fontFamily: 'Poppins, sans-serif' }} gutterBottom variant="h5" component="div" color="#E4E6EA">
                                                        {projectTitle}
                                                    </Typography>
                                                    <Typography sx={{ fontFamily: 'Poppins, sans-serif' }} variant="body2" color="#E4E6EA">
                                                        {projectDescription}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    underline='none'
                                                    variant="body2"
                                                    href={codeLink}
                                                >
                                                    <Button sx={{ alignItems: 'center' }} size="small" color="warning">
                                                        <GitHubIcon />
                                                        <Box sx={{ pl: 1, fontFamily: 'Poppins, sans-serif' }} component='p'>GitHub</Box>
                                                    </Button>
                                                </Link>
                                                <Link
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    variant="body2"
                                                    underline='none'
                                                    href={liveSite}
                                                >
                                                    <Button sx={{ alignItems: 'center' }} size="small" color="warning">
                                                        <LaunchIcon />
                                                        <Box sx={{ pl: 1, fontFamily: 'Poppins, sans-serif' }} component='p'>Live Site</Box>
                                                    </Button>
                                                </Link>
                                            </CardActions>
                                        </Card>
                                    </Fade>
                                </Grid>
                            );
                        })
                    }
                    <Grid item xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <NavLink
                                to='/projects' style={{ textDecoration: 'none' }}>
                                <Button
                                    variant='contained'
                                    color='error'
                                    sx={{
                                        width: '10rem',
                                        height: '3rem',
                                        fontSize: '1.1rem',
                                        fontFamily: 'Poppins, sans-serif',
                                        color: '#E4E6EA'
                                    }}
                                >
                                    View More
                                </Button>
                            </NavLink>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ProjectSection;