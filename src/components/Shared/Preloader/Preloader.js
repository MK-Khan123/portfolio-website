import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Preloader() {
    return (
        <Box
            mt={12}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <CircularProgress color='secondary' />
        </Box>
    );
}
