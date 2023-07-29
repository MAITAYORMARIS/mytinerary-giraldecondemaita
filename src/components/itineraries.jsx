import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './themeConfig';
import Container from '@mui/material/Container';
import "../styles/itineraries.css"
import Likes from "./likes"
import Avatar from '@mui/material/Avatar';
import PriceContent from './itineraryPrice'
import Buttonback from './buttontohome'
import Banner from './cityBanner'
import Suitcase from '../images/maletas.png'
import Direction from '../images/brujula.png'
import Plane from '../images/de-viaje.png'
import Line from '../images/pngegg.png'
import Curve from '../images/mark_1768904.png'
import Loading from './buttonCall'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ItinerariesList() {
    const [itineraries, setItineraries] = useState([])
    const [city, setCity] = useState([])
    const [loading, setLoading] = useState(true)


    const { id } = useParams()

    async function getCityData(id) {
        let cityData
        cityData = await axios.get("https://yormarismaita-api-cities-crud.onrender.com/api/cities/" + id);

        setCity(cityData.data.response[0]);
    }

    async function getItineraries(id) {

        let itinerariesDB
        itinerariesDB = await axios("https://yormaris-maita-api-itineraries-crud.onrender.com/api/itineraries/cities/" + id);
        console.log(itinerariesDB);
        setItineraries(itinerariesDB.data.response.itineraries);


    }
    useEffect(() => {
        getItineraries(id)
        getCityData(id)
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            setLoading(true); // Establece el estado de carga en true antes de obtener los datos

            await Promise.all([getItineraries(id), getCityData(id)]);

            setLoading(false); // Establece el estado de carga en false una vez que se hayan obtenido los datos
        } catch (error) {

            setLoading(false);
        }
    };



    return (
        <ThemeProvider theme={Theme.palette}>

            <Container maxWidth="xl" className="detailContain" sx={{ padding: '0', marginTop: '12vh' }}>
                {loading ?
                    (<div className="loadItinerary"><Loading text={"Looking itineraries from travelers"} /></div>)
                    : (
                        <>
                            <Banner city={city} />
                            <Box className="preview">
                                <Typography variant="h1" color="primary.main">Tour {city.name}</Typography>
                                <Typography variant="h2" sx={{ color: "secondary.dark" }}> Lovers of this city recommend </Typography>
                                <Typography variant="h2" sx={{ color: "secondary.dark" }}> the best to see and visit</Typography>
                                <Typography sx={{ color: "primary.dark" }}> Traveling is the only thing you buy and it makes you richer</Typography>
                            </Box>
                            < Box className="buttonBackContent"><Buttonback navigate={'/city/' + id} /></Box>


                            {itineraries.length > 0 ?

                                (itineraries.map((itinerary, index) => {

                                    return (

                                        <Accordion key={index} >
                                            <AccordionSummary sx={{ bgcolor: 'primary.light' }}
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Typography variant="body2" color="ffffff">{itinerary.name}</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails sx={{ bgcolor: '#f9fbe7' }}>
                                                <Box className="itinerariesContent">
                                                    <Box className='Side'>
                                                        <Box className="contentHead">
                                                            <Typography variant="h1" color="primary.main">Travel Itinerary</Typography>
                                                            <Typography variant="h2" sx={{ color: "secondary.dark" }}>{itinerary.name}</Typography>
                                                        </Box>
                                                        <Box className="itineraryHead" sx={{ bgcolor: 'primary.ligth' }}>
                                                            <Box className="imageHead"><img className="galeryPic" src={itinerary.image} alt={itinerary.name}></img></Box>
                                                            <Box className='imageLine'><img src={Line} alt='line curve icon' /></Box>
                                                            <Box className='imageDirection'><img src={Direction} alt='compass icon' /></Box>
                                                            <Box className='imagePlane'><img src={Plane} alt='plane icon' /></Box>
                                                        </Box>

                                                        <Box className="itineraryBody">

                                                            <Box className="basicData">
                                                                <Box className="dataDetail" sx={{ bgcolor: 'primary.light' }}>
                                                                    <Typography>Origin: </Typography>
                                                                    <Typography>{itinerary.origen}</Typography>
                                                                </Box>
                                                                <Box className="dataDetail" sx={{ bgcolor: 'primary.light' }}>
                                                                    <Typography>Duration:</Typography>
                                                                    <Typography>{itinerary.duration} </Typography>
                                                                </Box>
                                                            </Box>
                                                            <Box className="secondDataContent">
                                                                <div className='secondDataDetail'>
                                                                    <Box className='secondDataHead' sx={{ bgcolor: 'primary.light' }}><Typography>Transportation</Typography></Box>
                                                                    <div className="dataTwo"><Typography>{itinerary.transportation}</Typography></div>
                                                                </div>
                                                                <div className='secondDataDetail'>
                                                                    <Box className='secondDataHead' sx={{ bgcolor: 'primary.light' }}><Typography>Places To Visit</Typography></Box>
                                                                    <div className="dataTwo">
                                                                        <Typography>{itinerary.placesToVisit[0]}</Typography>
                                                                        <Typography>{itinerary.placesToVisit[1]} </Typography>
                                                                        <Typography>{itinerary.placesToVisit[2]} </Typography>
                                                                    </div>
                                                                </div>

                                                                <Box className='imageSuitcase'><img src={Suitcase} alt='suitcase icon' /></Box>
                                                            </Box>

                                                        </Box>
                                                    </Box>
                                                    <Box className='rigthSide'>
                                                        <Box className='rigthSideTitle' sx={{ bgcolor: 'primary.main'}}> <Typography variant="h2" >Our Travelers Talk</Typography></Box>

                                                        <div className='user'>
                                                            <Avatar
                                                                alt={itinerary.collaborator}
                                                                src={itinerary.profilePic}
                                                                sx={{ width: 200, height: 200, border:'solid', borderColor:'primary.main'}}
                                                            />
                                    
                                                        </div>
                                                        <Typography sx={{ fontWeight:'bold' }}>Review from:{itinerary.collaborator}</Typography>
                                                            <Typography>I really enjoy traveling across {city.name}</Typography>

                                                        <Box className='info'>
                                                            <Typography sx={{ color: 'primary.dark', fontWeight:'bold'  }}> About this Itinerary</Typography>
                                                            <Typography>{itinerary.description}</Typography>
                                                            <div className='social' >
                                                                <div className='likesContent'><Likes /></div>
                                                                <div className='hashContent'><Typography sx={{ fontFamily:'cursive' }}>{itinerary.hashtags}</Typography></div>
                                                            </div>
                                                            <div className="itineraryFooter">
                                                                <Typography sx={{ color: "primary.dark" }}>Go to this adventure Just by: </Typography>
                                                                <PriceContent price={itinerary.price} />
                                                            </div>
                                                        </Box>

                                                        {/* <Box className="dataContentTree">
<Box className='thirdDataHead' sx={{ bgcolor: 'primary.light' }}><Typography>Activities</Typography></Box>
<div className="dataThird"><Typography>{itinerary.activities} Under Construction</Typography></div>
</Box> */}

                                                    </Box>
                                                </Box>




                                            </AccordionDetails>
                                        </Accordion>

                                    )

                                }))


                                :
                                <Typography variant="h2" color="secondary.light">Sorry this City has not Itineraries Jet</Typography>
                            }
                        </>)}

            </Container >
        </ThemeProvider >
    );
}
