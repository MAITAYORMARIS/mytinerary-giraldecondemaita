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
import { Link as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';
import Banner from './cityBanner'




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
                            {/* <Box className="bannerCity"
                                sx={{ minWidth: '100%', height: '70vh', textAlign: 'right' }} >
                                
                                <Box className="bannerContent"><img className="titleImage" src={city[0].banner} alt={city[0].name} /></Box>
                                <Box className="curveOne"><img src={SVGImageTwo} className="SVGcolor" alt="irregularForm"></img></Box>
                                <Box className="curveTwo"><img src={SVGImageThird} alt="irregularForm2"></img></Box>
                                <Box className="curveThird"><img src={SVGImage} alt="irregularForm3"></img></Box>
                            </Box> */}
                            <Banner city={city[0]} />
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
                                    <Typography variant="h5">Country Oficial Name: {city[0].country} </Typography>
                                    <Typography variant="h5">Language: {city[0].language}</Typography>

                                </Box>
                                <Box className="galery">
                                    <div className="galeryPic RotarIzq"><img src={city[0].galUno} alt="vista de la ciudad"></img></div>

                                    <div className="galeryPic RotarDer galDos"><img src={city[0].galDos} alt="vista de la ciudad"></img></div>

                                    <div className="galeryPic RotarIzq galTres"><img src={city[0].galTres} alt="vista de la ciudad"></img>
                                        <Typography variant="h6" className="notes">My travel to {city[0].name}</Typography></div>
                                </Box>

                            </Box>
                            <Box className="curveContent">
                                <Box className="curveOne"><img src={SVGImageTwo} className="SVGcolor" alt="irregularForm"></img></Box>
                                <Box className="curveTwo"><img src={SVGImageThird} alt="irregularForm2"></img></Box>
                                <Box className="curveThird"><img src={SVGImage} alt="irregularForm3"></img></Box>
                            </Box>
                            <Box sx={{ height: '300px', marginTop: '60px', width: '100%' }}>
                                <Typography variant="h2" color="primary.main">Tour the City</Typography>
                                <Typography variant="h3" color="secondary.light">Go to Know the Itineraries that other travelers recommend</Typography>
                                <LinkRouter to={'/itineraries/cities/' + city[0]._id}>
                                    <Button size="small">Watch Itineraries</Button>
                                </LinkRouter>

                                {/* <Typography variant="h4" color="secondary.light">UNDER CONSTRUCTION</Typography> */}

                            </Box>
                            <Box className="buttonBackContent"><Buttonback /></Box></>

                        : <Spinner />}

                </Container>
            </React.Fragment>
        </ThemeProvider>

    )
}
