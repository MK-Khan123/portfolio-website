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
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-reveal';

const OtherProjects = () => {

    const otherProjects = [
        {
            id: 1,
            projectImg: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1652956007/other-projects-portfolio-website/project-1_jvukhm.png',
            projectTitle: 'Technical Doc Page',
            projectDescription: 'HTML5, CSS3, Media Queries',
            codeLink: 'https://github.com/MK-Khan123/technical-documentation-page',
            liveSite: 'https://mk-khan123.github.io/technical-documentation-page/index.html'
        },
        {
            id: 2,
            projectImg: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1652956007/other-projects-portfolio-website/project-2_vfwgfb.png',
            projectTitle: 'Product Landing Page',
            projectDescription: 'HTML5, CSS3, Media Queries',
            codeLink: 'https://github.com/MK-Khan123/product-landing-page',
            liveSite: 'https://mk-khan123.github.io/product-landing-page/index.html'
        },
        {
            id: 3,
            projectImg: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1652956007/other-projects-portfolio-website/project-3_kefsln.png',
            projectTitle: 'A Survey Form',
            projectDescription: 'HTML5, CSS3',
            codeLink: 'https://github.com/MK-Khan123/surveyForm',
            liveSite: 'https://mk-khan123.github.io/surveyForm/index.html'
        },
        {
            id: 4,
            projectImg: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1652956007/other-projects-portfolio-website/project-4_uqxpvq.png',
            projectTitle: 'A Tribute Page',
            projectDescription: 'HTML5, CSS3',
            codeLink: 'https://github.com/MK-Khan123/tributePage',
            liveSite: 'https://mk-khan123.github.io/tributePage/index.html'
        },
        {
            id: 5,
            projectImg: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1652956006/other-projects-portfolio-website/project-5_al1rog.png',
            projectTitle: 'Personal Portfolio Dummy',
            projectDescription: 'HTML5, CSS3, Media Queries',
            codeLink: 'https://github.com/MK-Khan123/personal-portfolio',
            liveSite: 'https://mk-khan123.github.io/personal-portfolio/index.html'
        },
        {
            id: 6,
            projectImg: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1652956007/other-projects-portfolio-website/project-6_ezgbzr.png',
            projectTitle: 'Responsive Landing Page',
            projectDescription: 'HTML5, CSS3, Bootstrap',
            codeLink: 'https://github.com/MK-Khan123/responsive_landing_page',
            liveSite: 'https://mk-khan123.github.io/responsive_landing_page/'
        }
    ];

    return (
        <Box mt={4}>
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
                Other Projects
            </Typography>
            <Box sx={{ flexGrow: 1 }} component='div'>
                <Grid container columnSpacing={3} rowSpacing={6} justifyContent='center'>
                    {
                        otherProjects.map(project => {
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
                    <Grid item mb={4} xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Button
                                size='large'
                                variant='contained'
                                color='error'
                            >
                                <NavLink
                                    to='/home'
                                    style={{
                                        textDecoration: 'none',
                                        fontFamily: 'Poppins, sans-serif',
                                        color: '#E4E6EA',
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    Go Back To Home
                                </NavLink>
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default OtherProjects;