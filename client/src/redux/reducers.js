import { 
    FILTER_BY_GENDER, 
    FILTER_BY_ORIGIN, 
    GET_GAMES, 
    GET_GAME_DETAILS, 
    ORDER_AZ, 
    ORDER_BY_RATING_ASCENDENTE, 
    ORDER_BY_RATING_DESCENDENTE,
    ORDER_ZA, 
    SEARCH_GAME 
} from './actions'

const initialState = {
    loadedGames: [],
    filteredGames: [],
    detailedGame: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GAMES: return {
            ...state, 
            loadedGames: action.payload,
            detailedGame: {},
        }
        case SEARCH_GAME: return {
            ...state, 
            filteredGames: action.payload,
        }
        case FILTER_BY_GENDER: return {
            ...state, 
            filteredGames: state.loadedGames.filter(game => game.genders[0].name === action.payload || game.genders[0] === action.payload)
        }
        case FILTER_BY_ORIGIN: return action.payload === 'db' ? {
            ...state, 
            filteredGames: state.loadedGames.filter(game => game.id.length > 8)
        } : action.payload === 'all' ? {
            ...state,
            filteredGames: state.loadedGames,
        } : {
            ...state, 
            filteredGames: state.loadedGames.filter(game => typeof game.id === 'number')
        }
        case GET_GAME_DETAILS: return {
            ...state, 
            detailedGame: action.payload,
        } 
        case ORDER_AZ: 
        const auxAZ = state.filteredGames.length > 0 ? state.filteredGames : state.loadedGames
        return {
            ...state, 
            filteredGames: auxAZ.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            }) 
        } 
        case ORDER_ZA: 
        const auxZA = state.filteredGames.length > 0 ? state.filteredGames : state.loadedGames
        return {
            ...state,
            filteredGames: auxZA.sort((a, b) => {
                if (a.name < b.name) return 1;
                if (a.name > b.name) return -1;
                return 0;
            })
        } 
        case ORDER_BY_RATING_ASCENDENTE: 
        const auxRA = state.filteredGames.length > 0 ? state.filteredGames : state.loadedGames
        return {
            ...state,
            filteredGames: auxRA.sort((a, b) => {
                if (a.rating > b.rating) return 1;
                if (a.rating < b.rating) return -1;
                return 0;
            })
        }
        case ORDER_BY_RATING_DESCENDENTE: 
        const auxRD = state.filteredGames.length > 0 ? state.filteredGames : state.loadedGames
        return {
            ...state,
            filteredGames: auxRD.sort((a, b) => {
                if (a.rating < b.rating) return 1;
                if (a.rating > b.rating) return -1;
                return 0;
            })
        }
        default: return state;
    }
}

export default rootReducer;