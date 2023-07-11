import * as React from 'react';
import { useEffect } from 'react';
import '../styles/cities.css';
import { Link as LinkRouter } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchInput from './searchCities';
import { useSelector, useDispatch } from 'react-redux';
import citiesActions from '../reduxContext/actions/citiesActions';


function Cities() {
    const dispatch = useDispatch()

    let searchResult = useSelector(store => store.citiesReducer.searchResult)
  

   const cities = useSelector(store => store.citiesReducer.cities)
 
    useEffect(() => {
        dispatch(citiesActions.getCities())
    }, [])

    return (
        <>
            <Box className="bannerSearch">
                <Typography variant="h3">The World awaits</Typography>
                <Typography variant="h4">Find your next destination</Typography>
                <SearchInput cities={cities} />
            </Box>
            <div className='contCard'>
                {cities.length > 0 ?

                    searchResult.map((city, index) =>{
                        return (

                        <Card sx={{ width: "30%", heigth: "350", maxHeight: "350" }} key={index}>
                            <CardMedia
                                sx={{ height: '140px' }}
                                image={city.image}
                                title={city.name}
                            />
                            <CardContent>
                                <Typography gutterBottom component="div">
                                    {city.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {city.phrase}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <LinkRouter key={index} to={'/city/' + city._id}>
                                    <Button size="small">Read More</Button>
                                </LinkRouter>
                            </CardActions>
                        </Card>)}
                    )
                    : <h1>Loading</h1>
                    }
                </div >


        </>
    )
}

export default Cities;