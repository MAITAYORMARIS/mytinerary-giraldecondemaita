import { useEffect, useState } from 'react';
import Trabajando from '../images/working-on.gif';
import '../styles/cities.css';
import Axios from "axios";

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
        <div>
            {cities.length > 0 ?
                <ul>
                {cities.map((city,index) => 
                        <li key={index}>{city.name}</li>
                    )}

                </ul>
                :<h1>Loading</h1>
        }
        </div>
        // <div className='CitiesContent'><img src={Trabajando} alt="emoticon" /></div>

    )
}

export default Cities;