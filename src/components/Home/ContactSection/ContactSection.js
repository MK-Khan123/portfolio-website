import React from 'react';
import emailjs from 'emailjs-com';
import contactPic from '../../../images/contact.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Link, TextField } from '@mui/material';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6gzgrvx', 'template_5lrib0o', e.target, 'user_ubOvzdirB7GpwSmCtJlmr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}

const CssTextField = styled(TextField)({
    '& .MuiInputLabel-root': {
        fontFamily: 'Poppins, sans-serif',
        color: '#878E99'
    },

    // '.MuiFormControl-root': {
    //     backgroundColor: '#191B1E'
    // },

    '& label': {
        color: '#878E99'
    },

    '& label.Mui-focused': {
        color: '#878E99'
    },

    '& .MuiOutlinedInput-root': {
        fontFamily: 'Poppins, sans-serif',
        color: '#E4E6EA',

        '&.Mui-focused fieldset': {
            borderColor: 'red'
        },

        // '&.Mui-focused textarea': {
        //     color: '#878E99'
        // }
    },

    '& .MuiFormHelperText-root': {
        color: '#E4E6EA'
    }
});

const ContactSection = () => {
    return (
        <Container id='contact' sx={{ paddingBottom: 8 }}>
            <Box component='h2' color='#C4CFDE' sx={{ fontSize: '4rem', fontFamily: 'Varela Round, sans-serif', marginBottom: '0.85rem', textAlign: 'center' }}>Let's work together...</Box>
            <Box component='p' color='#FFFFFF' sx={{ fontSize: '1.2rem', fontStyle: 'italic', marginY: '0.85rem', textAlign: 'center' }}>How do you take your coffee?</Box>

            <Grid mt={3} container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ boxShadow: 6, p: 4, borderRadius: 5, minHeight: '720px' }}>
                        <Box>
                            <img style={{ borderRadius: '5px', filter: 'brightness(80%)' }} width='100%' src={contactPic} alt="Old telephone set" />
                        </Box>
                        <Box component='p' sx={{ color: '#878E99', fontSize: '1.2rem' }}>
                            I'm available for entry level web development jobs. Let us connect through these social media platforms (icons below). For any queries, work samples or if you just want to say hi, fell free to drop a message.
                        </Box>

                        <Box component='p' sx={{ color: '#878E99', fontSize: '1.2rem', marginY: '0.2rem' }}>
                            Phone: <Box sx={{ color: '#E4E6EA' }} component='span'>+880 174 324 1541</Box>
                        </Box>
                        <Box component='p' sx={{ color: '#878E99', fontSize: '1.2rem', marginTop: '0.2rem' }}>
                            Email: <Box sx={{ color: '#E4E6EA' }} component='span'>mehnazkhan231@gmail.com</Box>
                        </Box>

                        {/* SOCIAL MEDIA ICONS */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link
                                sx={
                                    [
                                        { display: 'block', pr: 2, textDecoration: 'none', color: 'white', transition: 'transform 0.3s ease-out' },
                                        {
                                            '&:hover': {
                                                color: '#3b5998',
                                                transform: 'translateY(8px)'
                                            }
                                        }
                                    ]
                                }
                                href="https://www.facebook.com/mehnaz.ahmed.5030/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <FacebookIcon sx={{ fontSize: 30 }} />
                                    <Box sx={{ pl: 1 }} component='p'>Facebook</Box>
                                </Box>
                            </Link>
                            <Link
                                sx={
                                    [
                                        { display: 'block', px: 2, textDecoration: 'none', color: 'white', transition: 'transform 0.3s ease-out' },
                                        {
                                            '&:hover': {
                                                color: '#1DA1F2',
                                                transform: 'translateY(8px)'
                                            }
                                        }
                                    ]
                                }
                                href="https://twitter.com/MehnazAhmedKha1"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <TwitterIcon sx={{ fontSize: 30 }} />
                                    <Box sx={{ pl: 1 }} component='p'>Twitter</Box>
                                </Box>
                            </Link>
                            <Link
                                sx={
                                    [
                                        { display: 'block', px: 2, textDecoration: 'none', color: 'white', transition: 'transform 0.3s ease-out' },
                                        {
                                            '&:hover': {
                                                color: 'red',
                                                transform: 'translateY(8px)'
                                            }
                                        }
                                    ]
                                }
                                href="https://github.com/MK-Khan123"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <GitHubIcon sx={{ fontSize: 30 }} />
                                    <Box sx={{ pl: 1 }} component='p'>Github</Box>
                                </Box>
                            </Link>
                            <Link
                                sx={
                                    [
                                        { display: 'block', pl: 2, textDecoration: 'none', color: 'white', transition: 'transform 0.3s ease-out' },
                                        {
                                            '&:hover': {
                                                color: '#0e76a8',
                                                transform: 'translateY(8px)'
                                            }
                                        }
                                    ]
                                }
                                href="https://www.linkedin.com/in/mehnaz-ahmed-khan31/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <LinkedInIcon sx={{ fontSize: 30 }} />
                                    <Box sx={{ pl: 1 }} component='p'>LinkedIn</Box>
                                </Box>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ boxShadow: 6, p: 4, borderRadius: 5, minHeight: '720px' }}>
                        <Box
                            sx={{
                                marginTop: '0',
                                color: '#E4E6EA',
                                fontWeight: 400
                            }}
                            component='h2'
                        >
                            Leave a message
                        </Box>
                        <form onSubmit={sendEmail}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <CssTextField
                                        type='text'
                                        name='name'
                                        fullWidth
                                        id="custom-css-outlined-input1"
                                        label="Your Name"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <CssTextField
                                        type='number'
                                        name='number'
                                        fullWidth
                                        id="custom-css-outlined-input2"
                                        label="Phone Number"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        type='email'
                                        name='email'
                                        fullWidth
                                        label="Email"
                                        id="custom-css-outlined-input3"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        type='text'
                                        name='subject'
                                        fullWidth
                                        label="Subject"
                                        id="custom-css-outlined-input4"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CssTextField
                                        type='text'
                                        name='message'
                                        fullWidth
                                        id="custom-css-outlined-input5"
                                        label="Your Message"
                                        multiline
                                        minRows={10}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type='submit'
                                        sx={{ fontFamily: 'Poppins, sans-serif' }}
                                        size='large'
                                        variant="outlined"
                                        color="error"
                                        endIcon={<SendIcon />}
                                    >
                                        SEND MESSAGE
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default ContactSection;