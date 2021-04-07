import React from 'react'

import { useSelector, useDispatch } from "react-redux";

import pokeballImage from "../../assets/pokeball-logo.png";
import { ReactComponent as BackIcon } from "../../assets/left-arrow.svg";
import { showModalAction } from "../../actions/modalAction";
import { pokemonLoadedAction } from "../../actions/pokemonAction";

import "../../styles/modal.scss";
const Modal = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state) => state.pokemon.selectedPokemon);
  const loadingSelectedPokemon = useSelector((state) => state.pokemon.loadingSelectedPokemon);
  const showModal = useSelector((state) => state.modal.show);

  const handleClickOutside = (e) => {
    //If click outside
    if (e.target.className === "modal show") {
      dispatch(showModalAction(false));
    }
  };

  const handleClickExit = () => {
    dispatch(showModalAction(false));
  };

  const handleLoad = () => {
    // Image of pokemon Loaded
    dispatch(pokemonLoadedAction());
  };

  if (pokemon === null) return null;

  const getAbilites = () => {
    let abilities = pokemon.abilities.map((ability) => ability.ability.name);
    return abilities.join(", ");
  };

  const getTypes = () => {
    return pokemon.types[0].type.name;
  };

  const getHeight = () => {
    return `${pokemon.height / 10} m`;
  };

  const getWeight = () => {
    return `${pokemon.weight / 10} kg`;
  };

  const getWidth = (val) => {
    const width = (val * 100) / 255;
    return {
      width: `${width}%`,
    };
  };

  return (
    <>
      <div
        className={`modal ${showModal && !loadingSelectedPokemon ? "show" : ""}`}
        onClick={handleClickOutside}
      >
        <div className={`container`}>
          <div className="back-button" onClick={handleClickExit}>
            <BackIcon className="back-icon" />
          </div>
          <div className={`left-side ${getTypes()}`}>
            <img className="pokeball__layer" src={pokeballImage} alt="" />
            <div className="square__layer"></div>
            <p className="id__layer">#{pokemon.id}</p>
            <img
              onLoad={handleLoad}
              className="pokemon__image"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={`${pokemon.name}`}
            />
          </div>
          <div className="right-side">
            <h1 className="pokemon__name">{pokemon.name}</h1>
            <div className="types">
              {pokemon.types.map((type) => (
                <p key={type.slot} className={`type ${type.type.name}`}>
                  {type.type.name}
                </p>
              ))}
            </div>
            <div className="pokemon__about">
              <h4>About</h4>
              <p>Height: {getHeight()}</p>
              <p>Weight: {getWeight()}</p>
              <p className="abilities">Abilities: {getAbilites()}</p>
            </div>
            <div className="pokemon__stats">
              <p>Base Stats</p>
              {pokemon.stats.map((stat) => {
                let statName = "";
                if (stat.stat.name === "special-attack") {
                  statName = "Sp. Atk";
                } else if (stat.stat.name === "special-defense") {
                  statName = "Sp. Def";
                } else {
                  statName = stat.stat.name;
                }
                return (
                  <div key={stat.stat.url} className="stat">
                    <p className="stat__name">{statName}</p>
                    <p className="stat__value">{stat.base_stat}</p>
                    <div className="bar">
                      <div
                        className={`stat__bar ${getTypes()}`}
                        style={getWidth(stat.base_stat)}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
