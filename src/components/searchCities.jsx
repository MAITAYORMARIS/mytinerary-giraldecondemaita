import '../styles/cities.css'
import citiesActions from '../reduxContext/actions/citiesActions'
import {useDispatch} from 'react-redux'

function Search(props) {
const dispatch= useDispatch()

    
    async function Filter(e) {
        console.log(e.target.value)
        // setSearch(e.target.value)
        let searchResult = await props.cities.filter(city => city.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()))
       dispatch(citiesActions.searchResult(searchResult))
        console.log(searchResult)
       
    }
    return (
        <div>
            <input type="text" className="form-control me-2" onChange={(e) => Filter(e)} placeholder='Find your city'>
            </input>
        </div>
    )
}
export default Search;