import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelIcon from '@mui/icons-material/Hotel';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './themeConfig';
import Container from '@mui/material/Container';
import "../styles/itineraries.css"
import Likes from "./likes"
import Avatar from '@mui/material/Avatar';
import PriceContent from './itineraryPrice'

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ItinerariesList() {
    const [itineraries, setItineraries] = useState([])

    const { id } = useParams()

    async function getItineraries(id) {
        let itinerariesDB
        itinerariesDB = await axios("http://localhost:4000/api/itineraries/cities/" + id);
        console.log(itinerariesDB);
        setItineraries(itinerariesDB.data.response.itineraries);
    }
    useEffect(() => {
        getItineraries(id)
    }, [])


    return (
        <ThemeProvider theme={Theme.palette}>
            <Container maxWidth="xl" className="detailContain" sx={{ padding: '0', marginTop: '20vh' }}>
                {/* <Box className="activitiesContent">
                    <Box className="activities" sx={{ bgcolor: "primary.main", color: "primary.ligth" }}><LocalDiningIcon /></Box>
                    <Box className="activities" sx={{ bgcolor: "primary.main", color: "primary.ligth" }}><LocationOnIcon /></Box>
                    <Box className="activities" sx={{ bgcolor: "primary.main", color: "primary.ligth" }}><HotelIcon /></Box>

                </Box> */}
                {itineraries.length > 0 ?
                    itineraries.map((itinerary, index) => {
                        return (
                            <Accordion key={index} >
                                <AccordionSummary sx={{ bgcolor: 'primary.main' }}
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="body2" color="ffffff">{itinerary.name}</Typography>
                                </AccordionSummary>
                                <AccordionDetails sx={{ bgcolor: '#FAE6C1', paddingTop: '5vh' }}>
                                    <Box className="itineraryHead" sx={{ bgcolor: 'primary.ligth' }}>
                                        <Box className="imageHead"><img className="galeryPic RotarDer" src={itinerary.image} alt={itinerary.name}></img></Box>
                                        <Box className="contentHead">
                                            <Typography variant="h2" color="primary.main">Travel Itinerary</Typography>
                                            <Typography variant="h3" sx={{ color: "secondary.dark" }}>{itinerary.name}</Typography>
                                            <Typography variant="h4" sx={{ color: "primary.dark" }}>Go to this adventure Just by: </Typography>
                                            <PriceContent price={itinerary.price}/> 

                                        </Box>
                                    </Box>
                                    <Box className="itineraryBody">
                                        <Box><Typography>{itinerary.description}</Typography></Box>
                                        <Box className="basicData">
                                            <Box className="dataDetail">
                                                <Typography>Origin:</Typography>
                                                <Typography>{itinerary.origen}</Typography>
                                            </Box>
                                            <Box className="dataDetail">
                                                <Typography>Duration:</Typography>
                                                <Typography>{itinerary.duration} </Typography>
                                            </Box>
                                        </Box>
                                        <Box className="secondData">
                                            <Box className='Side'>
                                                <Box className="secondDataContent">
                                                    <Box className='secondDataHead' sx={{ bgcolor: 'secondary.main' }}><Typography>Transportation</Typography></Box>
                                                    <div className="dataTwo"><Typography>{itinerary.transportation}</Typography></div>
                                                </Box>
                                                <Box className="secondDataContent">
                                                    <Box className='secondDataHead' sx={{ bgcolor: 'secondary.main' }}><Typography>Places To Visit</Typography></Box>
                                                    <div className="dataTwo">
                                                        <Typography>{itinerary.placesToVisit[0]}</Typography>
                                                        <Typography>{itinerary.placesToVisit[1]} </Typography>
                                                        <Typography>{itinerary.placesToVisit[2]} </Typography>
                                                    </div>
                                                </Box>
                                            </Box>
                                            <Box className='rigthSide'>
                                                <Box className="dataContentTree">
                                                    <Box className='secondDataHead' sx={{ bgcolor: 'secondary.main' }}><Typography>Activities</Typography></Box>
                                                    <div className="dataTwo"><Typography>{itinerary.activities} Under Construction</Typography></div>
                                                </Box>

                                            </Box>
                                        </Box>









                                    </Box>
                                    <Box className="itineraryFooter">
                                        <div className='review'><Typography variant="h4">Review Update by:</Typography></div>

                                        <div className='info'>
                                            <div className='user'>
                                                <Avatar
                                                    alt={itinerary.collaborator}
                                                    src={itinerary.profilePic}
                                                    sx={{ width: 56, height: 56 }}
                                                />
                                                <Typography>{itinerary.collaborator}</Typography></div>

                                            <div className='social'>
                                                <Typography>{itinerary.hashtags}</Typography>
                                                <Likes />
                                            </div>
                                        </div>








                                    </Box>




                                </AccordionDetails>
                            </Accordion>
                        )

                    }
                    )


                    :
                    <Typography variant="h4" color="secondary.light">This City has not Itineraries Jet</Typography>}


            </Container>
        </ThemeProvider>
    );
}
