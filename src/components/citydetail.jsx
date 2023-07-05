import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelIcon from '@mui/icons-material/Hotel';
import SVGImage from '../images/img1.svg'
import SVGImageTwo from '../images/img2.svg'
import SVGImageThird from '../images/img3.svg'
import Buttonback from './buttontohome'
import Spinner from './chargeIcon'




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
        cityDB = await axios.get("https://yormarismaita-api-cities-crud.onrender.com/api/cities/" + id);
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

                <Container maxWidth="xl" className="detailContain" sx={{ padding: '0' }}>
                    {city.length > 0 ?
                        <>
                            <Box className="bannerCity"
                                sx={{ minWidth: '100%', height: '70vh', textAlign: 'right' }} >
                                {/* aca va la imagen de banner */}
                                <Box className="bannerContent"><img className="titleImage" src={city[0].banner} alt={city[0].name} /></Box>
                                <Box className="curveOne"><img src={SVGImageTwo} className="SVGcolor" alt="irregularForm"></img></Box>
                                <Box className="curveTwo"><img src={SVGImageThird} alt="irregularForm2"></img></Box>
                                <Box className="curveThird"><img src={SVGImage} alt="irregularForm3"></img></Box>
                            </Box>
                            <Box className="tittleCity"
                                sx={{ color: 'primary.main', width: '100%', height: 'auto', textAlign: 'right' }} >

                                <Typography variant="h3" className="textEfect">{city[0].name}</Typography>
                                <Typography variant="h4">{city[0].phrase}</Typography>
                            </Box>
                            <Box><Typography variant="h2" color="primary.main">Travel the World</Typography></Box>
                            <Box sx={{ color: "secondary.dark" }}><Typography variant="h3">Discover {city[0].region}</Typography></Box>
                            <Box className="infoCity" sx={{ height: 'auto', marginTop: '60px', width: '100%' }}>

                                <Box className="data">
                                    <Typography variant="h3">{city[0].info}</Typography>
                                    <Typography>Country Oficial Name: {city[0].country}</Typography>
                                    <Typography>Language: {city[0].language}</Typography>

                                </Box>
                                <Box className="galery">
                                    <img className="galeryPic RotarIzq" src={city[0].galUno} alt="vista de la ciudad"></img>
                                    <img className="galeryPic RotarDer" src={city[0].galDos} alt="vista de la ciudad"></img>
                                    <img className="galeryPic RotarIzq" src={city[0].galTres} alt="vista de la ciudad"></img>
                                    <Typography variant="h6" className="notes RotarIzq">My travel to {city[0].name}</Typography>
                                </Box>
                               
                            </Box>
                            <Box className="curveContent">
                                    <Box className="curveOne"><img src={SVGImageTwo} className="SVGcolor" alt="irregularForm"></img></Box>
                                    <Box className="curveTwo"><img src={SVGImageThird} alt="irregularForm2"></img></Box>
                                    <Box className="curveThird"><img src={SVGImage} alt="irregularForm3"></img></Box>
                                </Box>
                            <Box sx={{ height: '300px', marginTop: '60px', width: '100%' }}>
                                <Typography variant="h2" color="primary.main">Tour the City</Typography>
                                <Typography variant="h3" color="secondary.light">Activities</Typography>
                                <Box className="activitiesContent">
                                    <Box className="activities" sx={{ bgcolor: "primary.main", color: "primary.ligth" }}><LocalDiningIcon /></Box>
                                    <Box className="activities" sx={{ bgcolor: "primary.main", color: "primary.ligth" }}><LocationOnIcon /></Box>
                                    <Box className="activities" sx={{ bgcolor: "primary.main", color: "primary.ligth" }}><HotelIcon /></Box>

                                </Box>
                                <Typography variant="h4" color="secondary.light">UNDER CONSTRUCTION</Typography>
                            </Box>
                            <Box className="buttonBackContent"><Buttonback /></Box></>

                        : <Spinner/>}

                </Container>
            </React.Fragment>
        </ThemeProvider>

    )
}
