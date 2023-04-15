import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';
import { changePokeName } from '../store/slices/pokeName.slice';
import { useNavigate } from 'react-router-dom';

const Areas = () => {
  const location = useSelector(state => (state.location))
  const [areas, setAreas] = useState([])
  const [loAreas, setLoAreas] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/location/${location}`)
      .then(res => setAreas(res.data.areas))
  }, [])
  const mostrarea = (url) => {
    axios.get(url)
      .then(res => setLoAreas(res.data.pokemon_encounters))
  }
  const pokeDetails = (pokename) => {
    dispatch(changePokeName(pokename))
    navigate(`/charactersdetail/`)
  }
  return (
    <div>
      {location}
      {areas.map(area => (
        <div key={area.name}>
          <button onClick={e => mostrarea(e.target.value)} value={area.url}>
            {area.name}
          </button>
        </div>
      ))}
      {loAreas &&
        <div>
          {loAreas.map(loarea => (
            <div key={loarea.pokemon.name} onClick={() => pokeDetails(loarea.pokemon.name)} >
            <CharacterCard url={loarea.pokemon.url} >
            </CharacterCard>
            </div>
          ))}
        </div >
      }
    </div>
  );
};

export default Areas;