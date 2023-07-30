import '../styles/cities.css'
import citiesActions from '../reduxContext/actions/citiesActions'
import {useDispatch} from 'react-redux'
import { useState } from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Search(props) {
const dispatch= useDispatch()
const [showAlert, setShowAlert] = useState(false)
const [searchValue, setSearchValue] = useState('')


    
    async function Filter(e) {
        setSearchValue(e.target.value)
        console.log(e.target.value)
        // setSearch(e.target.value)
        let searchResult = await props.cities.filter(city => city.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
        if (searchResult.length === 0) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
       
       
        dispatch(citiesActions.searchResult(searchResult))
        console.log(searchResult)
       
    }
    const closeAlert = () => {
        setShowAlert(false); // Ocultar la alerta
        setSearchValue(''); // Limpiar el valor del input
        dispatch(citiesActions.getCities()) //volver a mostrar todas las ciudades despues de limpiar el input
    };
    return (
        <div>
            <input type="text" 
            className="form-control me-2" 
            onChange={(e) => Filter(e)} placeholder='Find your city'
            value={searchValue}>
            </input>

            <Stack sx={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 2 }} spacing={2}>
      

            {showAlert && (
                <Alert severity='info' onClose={closeAlert}>
                
                    City not found. Please try a different search</Alert>
            
            )}
            </Stack>
        </div>
    )
}
export default Search;