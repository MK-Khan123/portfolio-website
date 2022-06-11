import React from 'react';
import { Fade } from 'react-reveal';
import { Box, Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';

const TechnologySection = () => {
    return (
        <Container id='technology' sx={{ paddingBottom: 8, borderBottom: '3px solid #970C0C' }}>
            <Fade top>
                <Box
                    component='h2'
                    color='#C4CFDE'
                    sx={{
                        fontSize: '4rem',
                        fontFamily: 'Varela Round, sans-serif',
                        textAlign: 'center'
                    }}
                >
                    Technology
                </Box>
            </Fade>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
            >
                <Fade left>
                    <Card sx={{ boxShadow: 6, borderRadius: 2, backgroundColor: '#212428', marginY: 2 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }} gutterBottom variant="h5" component="div" color="#E4E6EA">
                                    Comfortable
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif' }} variant="h5" color="#878E99">
                                    JavaScript, ES6, React.js, HTML5, CSS3, Bootstrap, Material UI, React Router, React Redux, Redux Toolkit, Context API, Firebase Authentication, React Hooks Form.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Fade>

                <Fade right>
                    <Card sx={{ boxShadow: 6, borderRadius: 2, backgroundColor: '#212428', marginY: 2 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }} gutterBottom variant="h5" component="div" color="#E4E6EA">
                                    Familiar
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif' }} variant="h5" color="#878E99">
                                    MongoDB, Node.js, Express JS, React Stripe JS, CRUD operations, Firebase, Axios, Netlify, Heroku, acquainted with C/C++ programming language.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Fade>

                <Fade left>
                    <Card sx={{ boxShadow: 6, borderRadius: 2, backgroundColor: '#212428', marginY: 2 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }} gutterBottom variant="h5" component="div" color="#E4E6EA">
                                    Tools
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif' }} variant="h5" color="#878E99">
                                    Visual Studio Code, Git, Github, Chrome Dev Tool, Google Drive, Sheets, Docs, Microsoft Office
                                    applications (especially Microsoft Excel).
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Fade>
            </Box>
        </Container>
    );
};

export default TechnologySection;