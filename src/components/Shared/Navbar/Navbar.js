import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { NavLink } from 'react-router-dom';

const pages = ['home', 'about', 'projects', 'blogs', 'contact'];

const Navbar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);

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
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page, index) => (
                                    <MenuItem
                                        key={index}
                                        onClick={handleCloseNavMenu}
                                        sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                                    >
                                        <NavLink
                                            style={{ textDecoration: 'none', fontFamily: 'Poppins, sans-serif' }}
                                            to={`/${page}`}
                                        >
                                            {page}
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page, index) => (
                                <Button
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    variant='text'
                                    sx={{ my: 2, mr: 3, display: 'block' }}
                                >
                                    <NavLink
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white',
                                            fontSize: '1rem',
                                            transition: 'transform'
                                        }}
                                        to={`/${page}`}
                                    >
                                        {page}
                                    </NavLink>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0, display: 'flex' }}>
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