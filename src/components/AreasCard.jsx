import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';

const AreasCard = ({url}) => { 
  const navigate = useNavigate();
  const [character,setCharacter]=useState([])
  const [pokemonenc, setPokemoenc]=useState({})
useEffect(()=>{
axios.get(url)
.then(res=>setCharacter(res.data))
},[])

console.log(character)
  return (
    <div onClick={()=>navigate(`/Areas/`)}>
        {character.name} <br/> 
    </div>
  );
};

export default AreasCard;
/*{character.map(locatios=>(
  <div key={locatios.url}>{locatios.name}
  </div> 
  {character.pokemon_encounters[4]?.pokemon?.name}     
))}*/