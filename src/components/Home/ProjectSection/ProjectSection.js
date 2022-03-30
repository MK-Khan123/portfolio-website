import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid, Link } from '@mui/material';
import { Box } from '@mui/material';

const projectData = [
    {
        id: 1,
        projectImg: 'https://i.ibb.co/949t1mD/city-transport1.png',
        projectTitle: 'City Transport',
        projectDescription: 'A website for booking different transport services across the city',
        codeLink: 'https://github.com/MK-Khan123/city-transport',
        liveSite: 'https://practical-joliot-41cf3a.netlify.app/'
    },
    {
        id: 2,
        projectImg: 'https://i.ibb.co/XD81z21/fullstack1.png',
        projectTitle: 'Grocery House',
        projectDescription: 'A grocery shop website where users can purchase daily essentials',
        codeLink: 'https://github.com/MK-Khan123/fullstack-assignment-client',
        liveSite: 'https://fullstack-assignment.firebaseapp.com/'
    },
    {
        id: 3,
        projectImg: 'https://i.ibb.co/syJZXXR/complete12.png',
        projectTitle: 'City Wheels Auto Shop',
        projectDescription: 'An automotive service oriented website where people can opt for services online',
        codeLink: 'https://github.com/MK-Khan123/complete-website-client',
        liveSite: 'https://complete-website-assignm-474e8.firebaseapp.com/'
    }
];

const ProjectSection = () => {
    return (
        <Container sx={{ paddingBottom: 8, borderBottom: '3px solid #970C0C' }}>
            <Box
                component='h2'
                color='#C4CFDE'
                sx={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Varela Round, sans-serif' }}
            >
                My Projects
            </Box>
            <Box sx={{ flexGrow: 1 }} component='div'>
                <Grid container spacing={3} justifyContent='center'>
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
                                            <Link sx={{ textDecoration: 'none' }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="body2"
                                                href={codeLink}
                                            >
                                                <Button size="small" alignItems='center' color="warning">
                                                    <GitHubIcon />
                                                    <Box sx={{ pl: 1, fontFamily: 'Poppins, sans-serif' }} component='p'>GitHub</Box>
                                                </Button>
                                            </Link>
                                            <Link sx={{ textDecoration: 'none' }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                textDecoration='none'
                                                variant="body2"
                                                href={liveSite}
                                            >
                                                <Button size="small" alignItems='center' color="warning">
                                                    <LaunchIcon />
                                                    <Box sx={{ pl: 1, fontFamily: 'Poppins, sans-serif' }} component='p'>Live Site</Box>
                                                </Button>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ProjectSection;