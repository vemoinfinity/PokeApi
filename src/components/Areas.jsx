import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';
import useSearchNavi from '../hooks/useSearchNavi';
import { Button, CardGroup, Col, Container, Row } from 'react-bootstrap';
const Areas = () => {
  const location = useSelector(state => (state.location))
  const { pokeDetails } = useSearchNavi()
  const [areas, setAreas] = useState([])
  const [loAreas, setLoAreas] = useState(null)
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/location/${location}`)
      .then(res => setAreas(res.data.areas))
  }, [])
  const mostrarea = (url) => {
    axios.get(url)
      .then(res => setLoAreas(res.data.pokemon_encounters))
  }
  console.log(areas)
  return (
    <Container className='mt-4'>
          <h1>{location}</h1>
      <Row>
        <Col lg='auto'>
          {areas.map(area => (
            <div className='m-2' key={area.name}>
              <Button onClick={e => mostrarea(e.target.value)} value={area.url}>
                {area.name}
              </Button>
            </div>
          ))}
        </Col>
        <Col>
          {loAreas &&
            <Row className='d-flex'>
              {loAreas.map(loarea => (
                <Col key={loarea.pokemon.name}>
                  <CardGroup className='hola mx-auto' style={{ width: '300px', height: '440px' }}
                    onClick={() => pokeDetails(loarea.pokemon.name)} >
                    <CharacterCard url={loarea.pokemon.url} >
                    </CharacterCard>
                  </CardGroup>
                </Col>
              ))}
            </Row>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default Areas;