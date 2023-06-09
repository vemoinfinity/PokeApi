import React from 'react';
import { useSelector } from 'react-redux';
import { Button, CardGroup, Col, Container, Dropdown, Form, ListGroup, Pagination, Row } from 'react-bootstrap';
import usePokeApi from '../hooks/usePokeApi';
import useSearchNavi from '../hooks/useSearchNavi';             
import { useForm } from 'react-hook-form';
import CharacterCard from './CharacterCard';


const Characters = () => {
  const name = useSelector(state => state.userName)
  const { characters, locationList, countup, countdo, pagenext, pageprev, searchTerm } = usePokeApi()
  const { searchName, searchLocation, pokeDetails } = useSearchNavi()
  const { register, formState: { errors }, handleSubmit, } = useForm();
  return (
    <Container className='mt-4'>
      <h1>welcome to pokemon library</h1>
      <Row>
        <Col lg='auto'>
          <Form className="mb-3" onSubmit={handleSubmit(searchName)}>
            <Form.Control
              list='suggest'
              type="text"
              placeholder="buscar por nombre"
              {...register("name", {
                required: true,
              })}
            />{errors.name?.type === "required" && (
              <p>el campo Name es requerido</p>
            )}
            <datalist id='suggest'>
              <option>Seleccionar</option>
              {searchTerm.map(location => (
                <option value={location.name} key={location.url}>{location.name}</option>
                ))}
            </datalist>
          </Form>
          <ListGroup className='m-3'>
            <Dropdown>
              <Dropdown.Toggle style={{ width: "100%" }} >
                Locaciones de Pokemon
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "100%" }}>
                {locationList.map(location => (
                  <Dropdown.Item
                    key={location.url}
                    onClick={() => searchLocation(location.name)}
                  >{location.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </ListGroup>
        </Col>
        <Col>
          <Pagination className='d-flex m-auto mb-2' style={{width:'100%'}} >

            <Pagination.Prev onClick={pageprev} />
            <Pagination.Item className='text-center' style={{ width: "100%" }} active >Pokemons {countdo ? countdo : 1} to {countup} </Pagination.Item>
            <Pagination.Next onClick={pagenext} />
          </Pagination>
          <Row className='d-flex justify-content-center'>
            {
              characters.map(character => (
                <Col  xs='auto' lg='auto' key={character.url ? character.url : character}>
                  <CardGroup className='hola' style={{ width: '300px', height: '440px' }}
                    onClick={() => pokeDetails(character.name)}>
                    <CharacterCard
                      url={character.url ? character.url : character} />
                  </CardGroup>
                </Col>
              ))
            }
          </Row>
        </Col>                   
      </Row>
    </Container>
  );
};

export default Characters;
