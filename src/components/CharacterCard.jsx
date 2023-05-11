import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';

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
  let abilities = character.abilities
  let stats = character.stats
  return (
    <Card className='cardback my-5 border border-dark rounded-4' style={{  width: '420px' , height:'590px' }}>
      <Card.Title>
        {character.name}
        </Card.Title>
      <Card.Img className='imgpoke'  style={{  width: '350px' , height:'240px' }} src={character.sprites?.other.home.front_default ?
        character.sprites?.other.home.front_default :
        character.sprites?.front_default} alt='' />
        <Card.Body className='mx-2 my-1'>
        {abilities &&
        <div> <b>Abilitys:</b>
          {abilities.map(abilitys => (
            <div key={abilitys.ability.name}>
              {abilitys.ability.name}
            </div>
          ))}
        </div>
      }
      {heightmeters}m
      {weightkg}kg
      {types &&
        <div> <b>Types:</b>
          {types.map(type => (
            <div key={type.type.name}>
              {type.type.name}
            </div>
          ))}
        </div>
      }
      {stats &&
        <div> <b>Stats:</b>
          {stats.map(stas => (
            <div key={stas.stat.name}>
              {stas.stat.name}:{stas.base_stat}
            </div>
          ))}
        </div>
      }
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
//.
