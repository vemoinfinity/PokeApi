import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardImg } from 'react-bootstrap';
import backpokemon from '../img/Pokemon-Card.webp'
import backCard from '../img//backpokecard.jpg'
import StatsPoke from './StatsPoke';
import AbilitiesPoke from './AbilitiesPoke';
import TypePo from './TypePo';
const CharacterCard = ({ url }) => {
  const [character, setCharacter] = useState({})
  const [datos, setDatos] = useState('')
  const [datos1, setDatos1] = useState('')
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
  const colorT = (dato) => {
    setTimeout(() => {
      setDatos(dato)
      setDatos1(types[0]?.type.name)
    }, 100);
  }
  return (
    <Card className='rounded-5 rotate-horizontal-center' style={{ width: '300px', height: '420px' }} >
      <Card.Img className=' object-fit-cover rounded-5 ' src={backpokemon} style={{ backgroundColor: `var(--${datos1})` }} />
      <Card.ImgOverlay style={{ paddingTop: '11px' }}>
        <Card.Title className='d-flex justify-content-end' style={{ marginBottom: '1px' }}>
          <p className='text-center flex-grow-1' style={{ fontSize: '13px', margin: '0px', paddingTop: '6px' }}>{character.name}</p>
          {types &&
            types.map(typ => (
              <TypePo key={typ.type.name} data={typ.type.name} type={colorT} width='28'height='28' />
              ))
            }
        </Card.Title>
            <Card.Img src={backCard} style={{ width: '241px', height: '154px',marginTop:'9px',marginLeft:'20px',borderRadius:'55px',borderStyle:'inset',borderColor:`var(--${datos1})` }}/>
        <Card.ImgOverlay>
        <Card.Img className='m-5' style={{ width: '230px', height: '160px'}}
          src={character.sprites?.other.home.front_default ?
            character.sprites?.other.home.front_default :
            character.sprites?.front_default} alt='imag pokemon disable' />
            </Card.ImgOverlay>
        <p className='  d-flex justify-content-center' style={{ fontSize: '9px', margin: '0px', marginTop: '3px' }}>
          HT:{heightmeters}m,WT:{weightkg}kg
        </p>
        <Card.Body className='d-flex' style={{ padding: '3px' }}>
          {abilities &&
            <AbilitiesPoke abilities={abilities} fontSizeA='17'fontSizeDescrip='13'/>
          }
        </Card.Body>
        {stats &&
          <StatsPoke data={stats} width="20" height="20" heightbar='5' />
        }
      </Card.ImgOverlay>
    </Card>
  );
};

export default CharacterCard;
//.
