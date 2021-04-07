import {
  LOAD_POKEMON,
  LOAD_POKEMON_DONE,
  LOAD_POKEMON_ERROR,
  ACTIVATE_INTERSECTOR,
  SELECT_POKEMON,
  SELECT_POKEMON_DONE,
  SELECT_POKEMON_ERROR,
  SELECTED_POKEMON_LOADED,
  DESELECT_POKEMON,
  SEARCH_POKEMON,
  SEARCH_POKEMON_DONE,
  SEARCH_POKEMON_ERROR,
  SHUFFLE_POKEMON,
  SHUFFLE_POKEMON_DONE,
} from "../types";
import clienteAxios from "../config/axios";

import { sendAlertAction } from './alertAction'

const getID = (url) => {
  // Manipulate 'url' string to get ID of pokemon
  const offset = 33 - url.lastIndexOf("/");
  const id = url.slice(offset, -1);
  return ("000" + id).slice(-3);
};

export function loadPokemonsAction() {
  return async (dispatch, getState) => {
    const { nextPage } = getState().pokemon;
    const { intersector } = getState().pokemon;
    if(!intersector && nextPage !== '') return;
    dispatch(loadPokemons());
    try {
      let response = {}
      //If it is the first loading
      if (nextPage === "") {
        response = await clienteAxios.get("pokemon?limit=25");
      } else {
        response = await clienteAxios.get(nextPage);
        // Take pokemon ID on URL and put it in pokemon object
      }
      let pokemons = response.data.results.map((pokemon) => {
        const id = getID(pokemon.url);
        return {
          ...pokemon,
          id,
        };
      });
      dispatch(
        loadPokemonsDone({
          nextPage: response.data.next,
          pokemons,
        })
      );
      
    } catch (error) {
      dispatch(loadPokemonsError());
    }
  };
}

const loadPokemons = () => ({
  type: LOAD_POKEMON,
});

const loadPokemonsDone = (response) => ({
  type: LOAD_POKEMON_DONE,
  payload: response,
});

const loadPokemonsError = () => ({
  type: LOAD_POKEMON_ERROR,
});

export function activateIntersectorAction() {
  return (dispatch) => {
    dispatch(activateIntersector());
    //Activate Intersector and load new Pokemons immediately
    dispatch(loadPokemonsAction());
  };
}

const activateIntersector = () => ({
  type: ACTIVATE_INTERSECTOR
});

export function selectPokemonAction(pokemon) {
  return async (dispatch, getState) => {
    const { selectedPokemon } = getState().pokemon
    // If it is NOT the first pokemon to be selected AND selectedPokemon is different to new Selected
    if(selectedPokemon !== null && (selectedPokemon.name === pokemon.name)) return
    dispatch(selectPokemon())
    try {
      const response = await clienteAxios.get(pokemon.url)
      dispatch(selectPokemonDone(response.data))
    } catch (error) {
      console.log(error);
      dispatch(selectPokemonError())
    }
  }
}

const selectPokemon = () => ({
  type: SELECT_POKEMON,
})

const selectPokemonDone = (pokemon) => ({
  type: SELECT_POKEMON_DONE,
  payload: pokemon
})

const selectPokemonError = () => ({
  type: SELECT_POKEMON_ERROR
})

export function pokemonLoadedAction() {
  return (dispatch) => {
    dispatch(selectedPokemonLoaded())
  }
}

const selectedPokemonLoaded = () => ({
  type: SELECTED_POKEMON_LOADED
})

export function deselectPokemonAction(){
  return (dispatch) => {
    dispatch(deselectPokemon())
  }
}

const deselectPokemon = () => ({
  type: DESELECT_POKEMON
})

export function searchPokemonAction(pokemon){
  return async (dispatch, getState) => {
    const { selectedPokemon } = getState().pokemon
    // If it is NOT the first pokemon to be searched AND selectedPokemon is different to new searched
    if(selectedPokemon !== null && (selectedPokemon.name.toLowerCase() === pokemon.toLowerCase() || selectedPokemon.id === pokemon)) return
    dispatch(searchPokemon())
    //If string
    if(isNaN(pokemon)){
      pokemon = pokemon.toLowerCase()
    }
    try {
      const response = await clienteAxios(`pokemon/${pokemon}`)
      dispatch(searchPokemonDone(response.data))
    } catch (error) {
      console.log(error);
      dispatch(sendAlertAction('Pokémon not found', 'danger'))
      dispatch(searchPokemonError())
    }
  }
}

const searchPokemon = () => ({
  type: SEARCH_POKEMON
})

const searchPokemonDone = (pokemon) => ({
  type: SEARCH_POKEMON_DONE,
  payload: pokemon
})

const searchPokemonError = () => ({
  type: SEARCH_POKEMON_ERROR
})

export function shufflePokemonAction(){
  return async (dispatch) => {
    dispatch(shufflePokemon())
    setTimeout(() => {
      dispatch(shufflePokemonDone())
    }, 100)
  }
}

const shufflePokemon = () => ({
  type: SHUFFLE_POKEMON
})

const shufflePokemonDone = () => ({
  type: SHUFFLE_POKEMON_DONE
})