import "../styles/citydetail.css"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './themeConfig';

export default function CityDetail() {
    return (
        <ThemeProvider theme={Theme.palette}>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" className="detailContain">
                <Box
                    sx={{ minWidth: '100%', height: '70vh', textAlign: 'right' }} >
                    <img className="titleImage" src="https://firebasestorage.googleapis.com/v0/b/mytinerary-6ce01.appspot.com/o/BUENOS%20AIRES%2FbuenosAires.jpg?alt=media&token=782ef8de-7d1c-45f8-b432-145098ad0777" alt="puerto madero" />

                </Box>
                <Box
                    sx={{ width: '100%', height: 'auto', textAlign: 'right' }} >

                    <Typography variant="h3">Buenos Aires</Typography>
                    <Typography variant="h4">Gateway of Argentina</Typography>
                </Box>
                <Box sx={{ bgcolor: '#cfe8fc', height: '300px', marginTop:'60px' }}>
                    <Typography>Meet the Queen of the Rio de la Plata. The great cosmopolitan capital of Argentina</Typography>
                </Box>
                <Box sx={{ bgcolor: '#cfe8fc', height: '300px', marginTop:'60px' }}>
                    <Typography variant="h2" color="primary.main">Tour the City</Typography>
                </Box>


            </Container>
        </React.Fragment>
        </ThemeProvider>
    );
}
