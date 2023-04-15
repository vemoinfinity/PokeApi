import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';

const CharacterDetail = () => {
  const name = useSelector(state => (state.userName))
  const pokemon = useSelector(state => (state.pokeName))
  const [character, setCharacter] = useState([])
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => setCharacter(res.data))
  }, [])
  console.log(character)
  return (
    <div>
      <CharacterCard url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`}/>     
      <img src={character.sprites?.other.home.front_female} alt="" />
      <img src={character.sprites?.other.home.front_shiny} alt="" />
      <img src={character.sprites?.other.home.front_shiny_female} alt="" />
    </div>
  );
};

export default CharacterDetail;

