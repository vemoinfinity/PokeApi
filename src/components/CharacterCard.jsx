import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import backpokemon from '../img/Pokemon-Card-Template.png'
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
    <Card className='rounded-4' style={{ width: '300px', height: '470px' }} >
      <Card.Img className='object-fit-cover ' src={backpokemon} />
      <Card.ImgOverlay>
        <Card.Title className='mx-5 px-1'>
          <h6>{character.name}</h6>
        </Card.Title>
        <Card.Img className='mx-3' style={{ width: '230px', height: '160px' }}
          src={character.sprites?.other.home.front_default ?
            character.sprites?.other.home.front_default :
            character.sprites?.front_default} alt='' />
        <Card.Body style={{ padding: '3px' }}>
          <p className='mx-5 px-5' style={{fontSize:'9px', margin: '0px' }}>  
          {heightmeters}m,
          {weightkg}kg
          </p>
          {abilities &&
            <Row>
              <b style={{fontSize:'13px'}} >Abilitys:</b>
              {abilities.map(abilitys => (
                <Col lg='auto' key={abilitys.ability.name}>
                 <p style={{fontSize:'13px',margin: '0px' }} >{abilitys.ability.name}</p> 
                </Col>
              ))}
            </Row>
          }
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
      </Card.ImgOverlay>
    </Card>
  );
};

export default CharacterCard;
//.
