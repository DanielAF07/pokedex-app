import { ACTIVATE_INTERSECTOR, DESELECT_POKEMON, LOAD_POKEMON, LOAD_POKEMON_DONE, LOAD_POKEMON_ERROR, SEARCH_POKEMON, SEARCH_POKEMON_DONE, SEARCH_POKEMON_ERROR, SELECTED_POKEMON_LOADED, SELECT_POKEMON, SELECT_POKEMON_DONE, SELECT_POKEMON_ERROR, SHUFFLE_POKEMON, SHUFFLE_POKEMON_DONE } from "../types";

const initialState = {
  pokemonList: [],
  selectedPokemon: null,
  nextPage: '',
  intersector: false,
  loadingPokemons: false,
  loadingSelectedPokemon: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_INTERSECTOR:
      return {
        ...state,
        intersector: true
      }
    case LOAD_POKEMON:
      return {
        ...state,
        loadingPokemons: true
      }
    case LOAD_POKEMON_DONE:
      return {
        ...state,
        loadingPokemons: false,
        nextPage: action.payload.nextPage,
        pokemonList: [...state.pokemonList, ...action.payload.pokemons]
      }
    case LOAD_POKEMON_ERROR:
      return {
        ...state,
        loadingPokemons: false
      }
    case SELECT_POKEMON:
      return {
        ...state,
        loadingSelectedPokemon: true
      }
    case SEARCH_POKEMON:
      return {
        ...state,
        loadingSelectedPokemon: true,
        selectedPokemon: null,
      }
    case SEARCH_POKEMON_DONE:
    case SELECT_POKEMON_DONE:
      return {
        ...state,
        selectedPokemon: action.payload,
      }
    case SEARCH_POKEMON_ERROR:
    case SELECT_POKEMON_ERROR:
      return {
        ...state,
        loadingSelectedPokemon: false
      }
    case DESELECT_POKEMON:
      return {
        ...state,
        selectedPokemon: null
      }
    case SELECTED_POKEMON_LOADED:
      return {
        ...state,
        loadingSelectedPokemon: false
      }
    case SHUFFLE_POKEMON:
      return {
        ...state,
        loadingShuffle: true,
      }
    case SHUFFLE_POKEMON_DONE:
      return {
        ...state,
        loadingShuffle: false,
        pokemonList: [ ...state.pokemonList.sort( (a,b) => 0.5 - Math.random()) ]
      }
    default:
      return state;
  }
};

export default reducer;
