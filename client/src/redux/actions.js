import axios from 'axios';
export const GET_GAMES = 'getGames';
export const SEARCH_GAME = 'searchGame';
export const FILTER_BY_GENDER = 'filterByGender';
export const ORDER_AZ = 'orderAZ';
export const ORDER_ZA = 'orderZA';
export const FILTER_BY_ORIGIN = 'filterByOrigin';
export const GET_GAME_DETAILS = 'getGameDetails';
export const ORDER_BY_RATING_ASCENDENTE = 'orderByRatingAscendente';
export const ORDER_BY_RATING_DESCENDENTE = 'orderByRatingDescendente';

export const getGames = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/videogames')
        dispatch({ type: GET_GAMES, payload: response.data})
    }
}

export const searchGame = (name) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        dispatch({ type: SEARCH_GAME, payload: response.data})
    }
}

export const getGameDetails = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/videogames/${id}`)
        dispatch({ type: GET_GAME_DETAILS, payload: response.data})
    }
}

export const filterByGender = (gender) => (
    { type: FILTER_BY_GENDER, payload: gender }
)

export const orderAZ = () => (
    { type: ORDER_AZ }
)

export const orderZA = () => (
    { type: ORDER_ZA }
)

export const filterByOrigin = (origin) => (
    { type: FILTER_BY_ORIGIN, payload: origin }
)

export const orderByRatingAscendente = () => (
    { type: ORDER_BY_RATING_ASCENDENTE, }
)

export const orderByRatingDescendente = () => (
    { type: ORDER_BY_RATING_DESCENDENTE, }
)