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
import Form from 'react-bootstrap/Form';


function Cities() {
    const [cities, setCities] = useState([])
    const [arrayAFiltrar, setAFiltrar] = useState([])
    const [search, setSearch] = useState("")
    let citiesDB
    async function getData() {
        citiesDB = await Axios.get("https://yormarismaita-api-cities-crud.onrender.com/api/cities")

        setCities(citiesDB.data.response.cities)
        setAFiltrar(citiesDB.data.response.cities)
    }
    useEffect(() => {
        getData()
    }, [])

    function Filter(e) {
        setSearch(e.target.value)
        let searchResult = arrayAFiltrar.filter(city => city.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
        setCities(searchResult)
    }
    return (
        <>
            <box className="bannerSearch">
                <Typography variant="h3">The World awaits</Typography>
                <Typography variant="h4">Find your next destination</Typography>
                <div><input type="text" class="form-control me-2" onChange={(e) => Filter(e)} placeholder='Find your city'></input></div>
            </box>

            {cities.length > 0 ?


                <div className='contCard'>

                    {cities.map((city, index) =>

                        <Card sx={{ width: "30%" }} key={index}>
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
                                <LinkRouter key={index} to={'/city/' + city._id}>
                                    <Button size="small">Read More</Button>
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