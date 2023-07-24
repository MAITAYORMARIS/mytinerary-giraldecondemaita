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
import Line from '../images/flecha-curva-con-linea-discontinua.png'
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
            // Maneja los errores si es necesario
            setLoading(false); // Asegúrate de establecer el estado de carga en false en caso de errores también
        }
    };

    // useEffect(() => {
    //     fetchData();
    // }, [id]);



    return (
        <ThemeProvider theme={Theme.palette}>

            <Container maxWidth="xl" className="detailContain" sx={{ padding: '0', marginTop: '12vh' }}>

                <Banner city={city} />
                <Box className="preview">
                    <Typography variant="h1" color="primary.main">Tour {city.name}</Typography>
                    <Typography variant="h2" sx={{ color: "secondary.dark" }}> Lovers of this city recommend </Typography>
                    <Typography variant="h2" sx={{ color: "secondary.dark" }}> the best to see and visit</Typography>
                    <Typography sx={{ color: "primary.dark" }}> Traveling is the only thing you buy and it makes you richer</Typography>
                </Box>
                {loading ? (<Loading sx={{ marginTop: '12vh' }} text={"Looking itineraries from travelers"} />)
                    :
                    itineraries.length > 0 ?

                        (itineraries.map((itinerary, index) => {

                            return (
                                <>
                                    <Accordion key={index} >
                                        <AccordionSummary sx={{ bgcolor: 'primary.light' }}
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography variant="body2" color="ffffff">{itinerary.name}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ bgcolor: '#f9fbe7', paddingTop: '5vh' }}>
                                            <Box className="itineraryHead" sx={{ bgcolor: 'primary.ligth' }}>
                                                <Box className="imageHead"><img className="galeryPic RotarDer" src={itinerary.image} alt={itinerary.name}></img></Box>
                                                <Box className="contentHead">
                                                    <Typography variant="h1" color="primary.main">Travel Itinerary</Typography>
                                                    <Typography variant="h2" sx={{ color: "secondary.dark" }}>{itinerary.name}</Typography>



                                                </Box>
                                                <Box className='imageLine'><img src={Line} alt='line curve icon' /></Box>
                                                <Box className='imageDirection'><img src={Direction} alt='compass icon' /></Box>
                                                <Box className='imagePlane'><img src={Plane} alt='plane icon' /></Box>
                                            </Box>
                                            <Box className="itineraryBody">
                                                <Box className="itInfo"><Typography>{itinerary.description}</Typography></Box>

                                                <Box className="itContent">
                                                    <Box className='Side'>
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
                                                        <Box className="secondDataContent">
                                                            <Box className='secondDataHead' sx={{ bgcolor: 'primary.light' }}><Typography>Transportation</Typography></Box>
                                                            <div className="dataTwo"><Typography>{itinerary.transportation}</Typography></div>
                                                        </Box>
                                                        <Box className="secondDataContent">
                                                            <Box className='secondDataHead' sx={{ bgcolor: 'primary.light' }}><Typography>Places To Visit</Typography></Box>
                                                            <div className="dataTwo">
                                                                <Typography>{itinerary.placesToVisit[0]}</Typography>
                                                                <Typography>{itinerary.placesToVisit[1]} </Typography>
                                                                <Typography>{itinerary.placesToVisit[2]} </Typography>
                                                            </div>
                                                        </Box>
                                                    </Box>
                                                    <Box className='rigthSide' >
                                                        <div className='review'><Typography variant="h3">Review Update by:</Typography></div>

                                                        <div className='info'>
                                                            <div className='user'>
                                                                <Avatar
                                                                    alt={itinerary.collaborator}
                                                                    src={itinerary.profilePic}
                                                                    sx={{ width: 200, height: 200 }}
                                                                />
                                                                <Typography>{itinerary.collaborator}</Typography></div>

                                                            <div className='social'>
                                                                <Typography>{itinerary.hashtags}</Typography>
                                                                <Likes />
                                                            </div>
                                                        </div>
                                                        <Box className="itineraryFooter">
                                                            <Typography sx={{ color: "primary.dark" }}>Go to this adventure Just by: </Typography>
                                                            <PriceContent price={itinerary.price} />
                                                        </Box>
                                                        {/* <Box className="dataContentTree">
                                                        <Box className='thirdDataHead' sx={{ bgcolor: 'primary.light' }}><Typography>Activities</Typography></Box>
                                                        <div className="dataThird"><Typography>{itinerary.activities} Under Construction</Typography></div>
                                                    </Box> */}

                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box className='imageSuitcase'><img src={Suitcase} alt='suitcase icon' /></Box>

                                        </AccordionDetails>
                                    </Accordion>
                                    < Box className="buttonBackContent" key={index + 1} ><Buttonback navigate={'/city/' + id} /></Box></>
                            )

                        }))


                        :
                        <Typography variant="h2" color="secondary.light">This City has not Itineraries Jet</Typography>
                }

            </Container >
        </ThemeProvider >
    );
}
