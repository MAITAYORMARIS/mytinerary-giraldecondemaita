import * as React from 'react';
import { useEffect, useState } from 'react';
import Trabajando from '../images/working-on.gif';
import '../styles/cities.css';
import Axios from "axios";
import { Link as LinkRouter } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Cities() {
    const [cities, setCities] = useState([])
    let citiesDB
    async function getData() {
        citiesDB = await Axios.get("http://localhost:5000/api/cities")

        setCities(citiesDB.data.response.cities)

    }
    useEffect(() => {
        getData()
    }, [])
    
    useEffect(() => {
        console.log(cities)
    }, [cities])
    return (
        <>
            {cities.length > 0 ?
                <div className='CitiesContent'>
                    {cities.map((city, index) =>

                        <Card sx={{ maxWidth: 345 }} key={index}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={city.image}
                                title={city.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {city.country}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {city.phrase}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <LinkRouter key={index} to={'/city/'+city._id}>
                                    <Button size="small">Learn More</Button>
                                </LinkRouter>
                            </CardActions>
                        </Card>
                    )
                    }
                </div >
                : <h1>Loading</h1>
            }

        </>
    )
}

export default Cities;