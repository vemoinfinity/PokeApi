import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import usePokeApi from '../hooks/usePokeApi';
import DescriptionPoke from './DescriptionPoke';
import StatsPoke from './StatsPoke';
import TypePo from './TypePo';
import ThemeSup from '../themes/ThemeSup';
import ThemeBot from '../themes/ThemeBot';
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
    <Container className='m-auto mt-3'>
      <ThemeSup />
    <Row>
      <div className="pokegrid" style={{ backgroundColor: `var(--${datos1})` }}>
        <Card.Img src='../src/img/pokeback.webp' />
        <Card.ImgOverlay>
          <Row xs={2}>
            <Col xs={4} lg={4}>
              <Card.Title className='d-flex justify-content-end' >
                <h2 className='text-center flex-grow-1'>#{pokeunits.order}</h2>
                {types &&
                  types.map(typ => (
                    <TypePo key={typ.type.name} data={typ.type.name} type={colorT} />
                  ))
                }
              </Card.Title>
              <Card.Img
                src={pokeunits.sprites?.other.home.front_default ?
                  pokeunits.sprites?.other.home.front_default :
                  pokeunits.sprites?.front_default} alt='imag pokemon disable' />
            </Col>
            <Col xs={8} lg={6}>
              <Card.Body>
                {abilities &&
                  abilities.map(abilitis => (
                    <DescriptionPoke key={abilitis.ability.url} url={abilitis.ability.url} />
                  ))
                }
              </Card.Body>
              {stats &&
                <StatsPoke data={stats} />
              }
            </Col>
          </Row>
        </Card.ImgOverlay>
      </div>
      </Row>
      <ThemeBot />
    </Container>
  );
};

export default CharacterDetail;

