import React, { useState } from "react";
import "../../styles/pokemon-card.scss";

import { useDispatch, useSelector } from "react-redux";
import { showModalAction } from "../../actions/modalAction";
import { selectPokemonAction } from "../../actions/pokemonAction";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const loadingShuffle = useSelector((state) => state.pokemon.loadingShuffle);

  const handleLoad = (e) => {
    setShow(true);
  };

  const handleClick = (e) => {
    dispatch(selectPokemonAction(pokemon));
    dispatch(showModalAction(true));
  };

  return (
    <div
      className={`pokeCard animate__animated ${
        !show ? "hidden" : "animate__fadeInUp shuffle"} ${loadingShuffle ? 'animate__fadeOutDown' : ''}`}
      onClick={handleClick}
    >
      <div className="pokemon__info">
        <p className="id">No.{pokemon.id}</p>
        <h2 className="name">{pokemon.name}</h2>
      </div>
      <img
        onLoad={handleLoad}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`}
        alt=""
      />
    </div>
  );
};

export default PokemonCard;
