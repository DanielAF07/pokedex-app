import React, { useState, useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import "../../styles/pokemon-card.scss";

import { useDispatch, useSelector } from "react-redux";
import { showModalAction } from "../../actions/modalAction";
import { selectPokemonAction } from "../../actions/pokemonAction";

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const card = useRef();

  const [show, setShow] = useState(true);
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
      className={`pokeCard ${false ? "vp" : ""} animate__animated ${
        show ? "animate__fadeInUp" : ""
      } ${loadingShuffle ? "animate__fadeOutDown" : ""}`}
      onClick={handleClick}
      ref={card}
    >
      <div className="pokemon__info">
        <p className="id">No.{pokemon.id}</p>
        <h2 className="name">{pokemon.name}</h2>
      </div>
      <img
        width="220px"
        height="220px"
        onLoad={handleLoad}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id}.png`}
        // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        alt=""
      />
    </div>
  );
};

export default PokemonCard;
