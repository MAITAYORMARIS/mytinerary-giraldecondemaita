import Axios from 'axios'
const citiesActions = {
    searchResult: (filterResult) => {
        return (dispatch, getState) => {
            dispatch({ type: "searchResult", payload: filterResult })
        }
    },
    getCities: () => {
        return async (dispatch, getstate) => {
            const res = await Axios.get("https://yormarismaita-api-cities-crud.onrender.com/api/cities")
            dispatch({ type: "chargeCities", payload: res.data.response.cities })
        }
    }
}
export default citiesActions