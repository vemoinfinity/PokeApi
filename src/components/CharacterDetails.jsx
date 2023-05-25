import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import usePokeApi from '../hooks/usePokeApi';
import DescriptionPoke from './DescriptionPoke';
import StatsPoke from './StatsPoke';
import TypePo from './TypePo';
const CharacterDetail = () => {
  const [datos, setDatos] = useState('')
  const [datos1, setDatos1] = useState('')
  const { pokeunits } = usePokeApi()
  const abilities = pokeunits.abilities
  let stats = pokeunits.stats
  let types = pokeunits.types
  const colorT = (dato) => {
    setTimeout(() => {
      setDatos(dato)
      setDatos1(types[0]?.type.name)
    }, 100);
  }
  return (
    <Container style={{ backgroundColor: `var(--${datos1})` }}>
      <Card.Img className='mx-3' style={{ width: '230px', height: '160px' }}
        src={pokeunits.sprites?.other.home.front_default ?
          pokeunits.sprites?.other.home.front_default :
          pokeunits.sprites?.front_default} alt='imag pokemon disable' />

      {abilities &&
        abilities.map(abilitis => (
          <DescriptionPoke key={abilitis.ability.url} url={abilitis.ability.url} />
        ))
      }
      {stats &&
        <StatsPoke data={stats} />
      }
      {types &&
        types.map(typ => (
          <TypePo key={typ.type.name} data={typ.type.name} type={colorT} />
        ))
      }
      <img src={pokeunits.sprites?.other.home.front_female} alt="" />
      <img src={pokeunits.sprites?.other.home.front_shiny} alt="" />
      <img src={pokeunits.sprites?.other.home.front_shiny_female} alt="" />
    </Container>
  );
};

export default CharacterDetail;

