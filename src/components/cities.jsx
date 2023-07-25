import * as React from 'react';
import { useEffect } from 'react';
import '../styles/cities.css';
import { Link as LinkRouter } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from 'react-bootstrap/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchInput from './searchCities';
import { useSelector, useDispatch } from 'react-redux';
import citiesActions from '../reduxContext/actions/citiesActions';
import Wait from './buttonCall'
import ButtonTop from './buttonTop'


function Cities() {
    const dispatch = useDispatch()

    let searchResult = useSelector(store => store.citiesReducer.searchResult)


    const cities = useSelector(store => store.citiesReducer.cities)

    useEffect(() => {
        dispatch(citiesActions.getCities())
    }, [])

    return (
        <>
            <Box className="citiesContent">
                <Box className="bannerSearch">
                    <div class="mirrow"></div>
                    <div className="bannerSearchCont">
                        <Typography variant="h2">The World awaits</Typography>
                        <Typography variant="h3">Find your next destination</Typography>
                        <SearchInput cities={cities} />
                    </div>
                </Box>
                <Typography variant="h2" sx={{ color: 'primary.main' }}>Come to Know the Cities that other travelers Love</Typography>

                <div className='contCard'>

                    {cities.length > 0 ?

                        searchResult.map((city, index) => {
                            return (
                                <>
                                    <div className="card" key={index}>
                                        <div className="cardImgContent"><img src={city.image} alt={city.name} /></div>
                                        <div className="geometricB"></div>
                                        <div className="geometricA"></div>
                                        <div className="title-slide-item">{city.name}</div>
                                        <div className='buttonCard' sx={{color:"secondary.dark"}}>
                                        <LinkRouter key={index} to={'/city/' + city._id} style={{ textDecoration: 'none'}}>
                                            <Button className='cardbtn'>Read More</Button>
                                        </LinkRouter>
                                        </div>

                                    </div>
                                    {/* <Card sx={{ width: "calc(100%/4)", height: "350px" }} key={index}>
                                        <CardMedia
                                            sx={{ height: '270px' }}
                                            image={city.image}
                                            alt={city.name}
                                        />

                                        <CardContent
                                            sx={{ height: '50px', padding: '10px' }}>
                                            <Typography gutterBottom component="div">
                                                {city.name}
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ height: '20px', padding: '5px', textAlign: 'right' }}>
                                            <LinkRouter key={index} to={'/city/' + city._id}>
                                                <Button size="small">Read More</Button><ArrowForwardIcon sx={{ color: 'primary.main' }} />
                                            </LinkRouter>
                                        </CardActions>
                                    </Card > */}
<ButtonTop />
                                </>)
                        }
                        )
                        : <Wait text={"Looking the most visit cities"}></Wait>

                    }</div>

            </Box >


        </>
    )
}

export default Cities;