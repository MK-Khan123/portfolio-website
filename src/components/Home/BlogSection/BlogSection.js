import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Grid, Link } from '@mui/material';
import { Box } from '@mui/material';
import blogPic1 from '../../../images/javaScript.png';
import blogPic2 from '../../../images/front-end-developer.jpg';
import blogPic3 from '../../../images/developer.png';

const blogData = [
    {
        id: 1,
        blogImage: blogPic1,
        blogTitle: '10 important JavaScript concepts that can help in interview',
        blogDescription: "In this blog, I'll be discussing about JavaScript concepts which are essential for facing interviews",
        blogLink: 'https://mehnazkhan231.medium.com/10-important-javascript-concepts-that-can-help-in-interview-5fa2c8ba25a6'
    },
    {
        id: 2,
        blogImage: blogPic2,
        blogTitle: '10 things about ReactJS that a developer should know',
        blogDescription: "In this blog, I'll be discussing about ReactJS concepts which are bare minimum one should have some idea about",
        blogLink: 'https://mehnazkhan231.medium.com/10-things-about-reactjs-that-a-developer-should-know-1973983c8dbb'
    },
    {
        id: 3,
        blogImage: blogPic3,
        blogTitle: 'Another 10 important topics that JavaScript developers should know',
        blogDescription: "In this blog, I'll be discussing about few tricky JavaScript concepts, knowing which will definitely assist one to become a better developer",
        blogLink: 'https://mehnazkhan231.medium.com/another-10-important-topics-that-javascript-developers-should-know-5767afbab89c'
    }
]

const BlogSection = () => {
    return (
        <Container id='blogs' sx={{ paddingBottom: 8, borderBottom: '3px solid #970C0C' }}>
            <Box
                component='h2'
                color='#C4CFDE'
                sx={{ fontSize: '4rem', textAlign: 'center', fontFamily: 'Varela Round, sans-serif' }}
            >
                My Blogs
            </Box>
            <Box sx={{ flexGrow: 1 }} component='div'>
                <Grid container spacing={3} justifyContent='center'>
                    {
                        blogData.map(blog => {
                            const { blogImage, blogTitle, blogDescription, blogLink, id } = blog;
                            return (
                                <Grid key={id}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    item md={4} sm={12}>
                                    <Card sx={{ maxWidth: 410, boxShadow: 6, borderRadius: 2, backgroundColor: '#212428' }}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="250"
                                                image={blogImage}
                                                alt="blog image"
                                            />
                                            <CardContent>
                                                <Typography sx={{ fontFamily: 'Poppins, sans-serif' }} gutterBottom variant="h5" component="div" color="#E4E6EA">
                                                    {blogTitle}
                                                </Typography>
                                                <Typography sx={{ fontFamily: 'Poppins, sans-serif' }} variant="body2" color="#E4E6EA">
                                                    {blogDescription}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Link
                                                sx={{ textDecoration: 'none' }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="body2"
                                                href={blogLink}
                                            >
                                               <Button sx={{ alignItems: 'center' }} size="small" color="warning"> {/**Eita change korsi */}
                                                    <LaunchIcon />
                                                    <Box sx={{ pl: 1 }} component='p'>Read More</Box>
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

export default BlogSection;