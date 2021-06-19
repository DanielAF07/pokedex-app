import "../../styles/header.scss";
import React, { useState } from "react";

import Spinner from '../misc/Spinner'
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { ReactComponent as ShuffleIcon } from "../../assets/shuffle.svg";
import { ReactComponent as MenuIcon } from '../../assets/list.svg'

import { useDispatch, useSelector } from "react-redux";
import { searchPokemonAction, shufflePokemonAction } from "../../actions/pokemonAction";
import { showModalAction } from "../../actions/modalAction";

import pokemonNames from '../../config/pokemonList'
import Sidenav from "./Sidenav";

const Header = () => {
  const dispatch = useDispatch();

  const loadingSelectedPokemon = useSelector((state) => state.pokemon.loadingSelectedPokemon);

  const [form, setForm] = useState({
    search: "",
  });

  const [showSidenav, setShowSidenav] = useState(false)

  const handleChange = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Blur input to close datalist
    window['searchPokemon'].blur()
    if (form.search.trim() === "") {
      return;
    }
    dispatch(searchPokemonAction(form.search));
    dispatch(showModalAction(true));
  };

  const handleClickShuffle = () => {
    dispatch(shufflePokemonAction())
  }

  const handleClickSidenav = () => {
    setShowSidenav(!showSidenav)
  }

  return (
    <>
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            type="search"
            name="search"
            id="searchPokemon"
            placeholder="Pokémon or ID"
            value={form.search}
            onChange={handleChange}
            list="pokemonNames"
          />
          <button type="submit">
            <SearchIcon className="search-icon" />
          </button>
          <datalist id="pokemonNames">
            {pokemonNames.map( (name,i) => <option key={i}>{name}</option>)}
          </datalist>
        </form>
        <button
          onClick={handleClickSidenav}
          className="menu-btn"
        >
          <MenuIcon />
        </button>
        <button
          onClick={handleClickShuffle}
          className="shuffle-btn"
        >
          <span>Shuffle</span> <ShuffleIcon />
        </button>
        <button
          onClick={handleClickShuffle}
          className="mobile-shuffle-btn"
        >
         <ShuffleIcon />
        </button>
      </div>
      {loadingSelectedPokemon ? <Spinner /> : null}
      <Sidenav
        setShow={setShowSidenav}
        show={showSidenav}
      />
    </>
  );
};

export default Header;
