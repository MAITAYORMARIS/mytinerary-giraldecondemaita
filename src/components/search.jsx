import citiesActions from "../contex_redux/actions/citiesActions"
import {useDispatch} from "react-redux"

function Search(props){
    const dispatch= useDispatch()
    console.log(props.arraAFiltrar)
   
    async function filter(e){
        console.log(e.target.value)

        let searchResult = await props.arrayAFiltrar.filter(city=> city.name.toLowerCase().trim().includes(e-target.value.toLowerCase().trim()))
dispatch(citiesActions.searchResult(searchResult))

        console.log(searchResult)
    }
    return(
        <div>
            <input classname="" placeholder="ingresa tu busqueda" onChange={(e)=>{filter(e)}}/>
        </div>
    )
}
export default Search;