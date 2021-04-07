import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "../../styles/pokemonbox.scss";

import { useSelector, useDispatch } from "react-redux";
import {
  loadPokemonsAction,
  activateIntersectorAction,
} from "../../actions/pokemonAction";
import Spinner from "../misc/Spinner";
const PokemonBox = () => {
  const dispatch = useDispatch();

  const pokemonList = useSelector((state) => state.pokemon.pokemonList);
  const intersector = useSelector((state) => state.pokemon.intersector);
  const loadingPokemons = useSelector((state) => state.pokemon.loadingPokemons);
  const loadingShuffle = useSelector((state) => state.pokemon.loadingShuffle);

  useEffect(() => {
    const handleIntersection = async (e) => {
      if (e[0].isIntersecting) {
        await dispatch(loadPokemonsAction());
      }
    };
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(window.intersection);
  }, [dispatch]);

  const activateIntersector = () => {
    dispatch(activateIntersectorAction());
  };

  return (
      <div className="hwrapper container" hidden={ loadingShuffle ? false : false}>
        <div className="pokemon-box">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
          <div id="intersection"></div>
          {!intersector && pokemonList.length > 0? (
            <a href="#!" className="loadMore" onClick={activateIntersector}>
              Get more Pokémon!
            </a>
          ) : null}
        {loadingPokemons ? <Spinner /> : null}
      </div>
  );
};

export default PokemonBox;
