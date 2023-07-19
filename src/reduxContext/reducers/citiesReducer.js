const initialState = {
    cities: [],
    citiesAuxToFilter: [],
    searchResult: [],

}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "searchResult":
            return {
                ...state,
                searchResult: action.payload
            }
        case "chargeCities":
            return {
                ...state,
                cities: action.payload,
                searchResult: action.payload
            }
        default: return state
    }
}

export default citiesReducer