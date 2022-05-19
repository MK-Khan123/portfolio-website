import React from 'react';
import { Box, Container } from '@mui/material';
import bannerImage from '../../images/project-background.jpg';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import ProjectZero from './ProjectZero/ProjectZero';
import ProjectOne from './ProjectOne/ProjectOne';
import ProjectTwo from './ProjectTwo/ProjectTwo';
import ProjectThree from './ProjectThree/ProjectThree';
import "./Projects.css";

const Projects = () => {
    document.title = 'Projects';

    return (
        <section id="projects">
            <header>
                <Navbar />
            </header>

            <main>
                <Box sx={{
                    backgroundImage: `url(${bannerImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '25.625rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Box sx={{ fontSize: '4rem', color: 'white' }} component='h5'>PROJECTS</Box>
                </Box>

                <Container>
                    <ProjectZero />
                    <ProjectOne />
                    <ProjectTwo />
                    <ProjectThree />
                </Container>
            </main>

            <footer>
                <Footer />
            </footer>
        </section >
    );
};

export default Projects;