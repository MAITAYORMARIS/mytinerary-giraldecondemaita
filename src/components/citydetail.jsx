import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



import "../styles/citydetail.css"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './themeConfig';


export default function CityDetail() {
    const [city, setCity] = useState([])

    const { id } = useParams()

    async function getCity(id) {
        let cityDB
        cityDB = await axios.get("http://localhost:5000/api/cities/" + id);
        console.log(cityDB);
        setCity(cityDB.data.response);
    }
    useEffect(() => {
        getCity(id)
    }, [])

    return (
        <ThemeProvider theme={Theme.palette}>
            <React.Fragment>
                <CssBaseline />

                <Container maxWidth="xl" className="detailContain">
                    {city.length > 0 ?
                        <>
                            <Box
                                sx={{ minWidth: '100%', height: '70vh', textAlign: 'right' }} >
                                {/* aca va la imagen de banner */}
                                <img className="titleImage" src={city[0].image} alt="fotografia de" />
                            </Box>
                            <Box
                                sx={{ width: '100%', height: 'auto', textAlign: 'right' }} >

                                <Typography variant="h3">{city[0].name}</Typography>
                                <Typography variant="h4">{city[0].phrase}</Typography>
                            </Box>
                            <Box sx={{ bgcolor: '#cfe8fc', height: '300px', marginTop: '60px' }}>
                                <Typography>{city[0].info}</Typography>
                            </Box>
                            <Box sx={{ bgcolor: '#cfe8fc', height: '300px', marginTop: '60px' }}>
                                <Typography variant="h2" color="primary.main">Tour the City</Typography>
                            </Box></>

                        : <h1>LOADING</h1>}

                </Container>
            </React.Fragment>
        </ThemeProvider>

    )
}
