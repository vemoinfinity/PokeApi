import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';
import { Button, Container, Form, Pagination } from 'react-bootstrap';
import usePokeApi from '../hooks/usePokeApi';
import useSearchNavi from '../hooks/useSearchNavi';
import { useForm } from 'react-hook-form';

const Characters = () => {
  const name = useSelector(state => (state.userName))
  const { characters, locationList, countup, countdo, pagenext, pageprev,searchTerm } = usePokeApi()
  const { searchName, searchLocation, pokeDetails} = useSearchNavi()
  const { register, formState: { errors }, handleSubmit, } = useForm();
  return (
    <Container>
      <h1>welcome {name} </h1>
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
        <Button type="submit">
          Button
        </Button>
        <datalist id='suggest'>
        <option>Seleccionar</option>
        {searchTerm.map(location => (
          <option value={location.name} key={location.url}>{location.name}</option>
        ))}
        </datalist>
      </Form>

      <h3>buscar locaciones</h3>
      <Form.Select onChange={e => searchLocation(e.target.value)} >
        <option>Seleccionar</option>
        {locationList.map(location => (
          <option value={location.name} key={location.url}>{location.name}</option>
        ))}
      </Form.Select>
      <Pagination>
        <Pagination.Prev onClick={pageprev} />
        <Pagination.Item active>Pokemons {countdo ? countdo : 1} to {countup} </Pagination.Item>
        <Pagination.Next onClick={pagenext} />
      </Pagination>
      {
        characters.map(character => (
          <div key={character.url ? character.url : character}
            onClick={() => pokeDetails(character.name)}  >
            <CharacterCard
              url={character.url ? character.url : character} />
          </div>
        ))
      }
    </Container>
  );
};

export default Characters;