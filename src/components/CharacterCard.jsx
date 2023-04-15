import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const CharacterCard = ({ url }) => {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    axios.get(url)
      .then(res => setCharacter(res.data))
  }, [])
  let decimeters = character.height
  let heightmeters = (decimeters * (1 / 10)).toFixed(2)
  let hectograms = character.weight
  let weightkg = (hectograms * (1 / 10)).toFixed(2)
  let types = character.types

  return (
    <div>
      <h2>{character.name}</h2>
      <img src={character.sprites?.other.home.front_default ?
        character.sprites?.other.home.front_default :
        character.sprites?.front_default} alt='' />
      <h4>{heightmeters}m</h4>
      <h4>{weightkg}kg</h4>
      {types &&
        <div> <h3><b>Types:</b></h3>
          {types.map(type => (
            <h4 key={type.type.name}>
              {type.type.name}
            </h4>
          ))}
        </div>
      }
    </div>
  );
};

export default CharacterCard;
//.
