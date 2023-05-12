import React from 'react';
import CharacterCard from './CharacterCard';
import useLogin from '../hooks/useLogin';
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const UserLogin = () => {
  const usersName = useSelector(state => state.userName)
  const { character, submit } = useLogin()
  const { register, formState: { errors }, handleSubmit, } = useForm();

  return (
    <div>
      <h1>Welcome To Pokedex</h1>
      {character && <div>
        <CharacterCard url={character} />
      </div>}
      <h1>ingresa tu nombre para revisar el catalogo de pokemons</h1>
      <h2>{usersName}</h2>
      <Form onSubmit={handleSubmit(submit)}>
        <Form.Control
          {...register("name", {
            required: true,
          })}
          placeholder="Recipient's username"
          type="text"
        />
        {errors.name?.type === "required" && (
          <p>el campo Name es requerido</p>
        )}
        <Button type="submit">
          send
        </Button>
      </Form>
    </div>
  );
};

export default UserLogin;