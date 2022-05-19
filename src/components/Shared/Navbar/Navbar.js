import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, IconButton, Link, Menu, MenuItem, Toolbar } from '@mui/material';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { NavHashLink } from 'react-router-hash-link';

const pages = ['home', 'projects', 'technology', 'blogs', 'contact'];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{
            position: 'relative',
            top: '1.2rem'
        }}>
            <AppBar
                sx={{
                    '& .MuiButton-text': {
                        fontFamily: 'Poppins, sans-serif'
                    }
                }}
                style={{
                    background: 'transparent',
                    boxShadow: 'none'
                }}
                position="absolute"
            >
                <Container>
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Link as={NavHashLink}
                                            to={`/home#${page}`}
                                            sx={{
                                                textDecoration: 'none',
                                                fontFamily: 'Poppins, sans-serif',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            {page}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <Link as={NavHashLink}
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    to={`/home#${page}`}
                                    sx={[
                                        {
                                            my: 2,
                                            mr: 3,
                                            display: 'block',
                                            transition: 'transform 0.3s ease-out',
                                            textDecoration: 'none',
                                            textTransform: 'uppercase',
                                            color: 'white',
                                            fontSize: '1rem'
                                        },
                                        {
                                            '&:hover': {
                                                color: '#1DA1F2',
                                                transform: 'translateY(8px)'
                                            }
                                        }
                                    ]}
                                >
                                    {page}
                                </Link>
                            ))}
                        </Box>

                        <Box
                            sx={[
                                { flexGrow: 0, display: 'flex', transition: 'transform 0.3s ease-out' },
                                {
                                    '&:hover': {
                                        color: '#1DA1F2',
                                        transform: 'translateY(8px)'
                                    }
                                }
                            ]}
                        >
                            <Box sx={{ display: 'block' }}>
                                <FileDownloadRoundedIcon />
                            </Box>
                            <Link
                                color='inherit'
                                underline='none'
                                target='_blank'
                                rel="noopener noreferrer"
                                href="https://drive.google.com/uc?export=download&id=1MTfkVtREFJNFP_wyXy2DzKuVpJYYOCFf"
                            >
                                DOWNLOAD RESUME
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box >
    );
};

export default Navbar;