import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'
import modalReducer from './modalReducer'
import alertReducer from './alertReducer'


export default combineReducers({
    pokemon: pokemonReducer,
    modal: modalReducer,
    alert: alertReducer
})