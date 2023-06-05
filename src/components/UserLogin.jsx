import React from 'react';
import CharacterCard from './CharacterCard';
import useLogin from '../hooks/useLogin';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import ThemeSup from '../themes/ThemeSup';
import ThemeBot from '../themes/ThemeBot';

const UserLogin = () => {
  const usersName = useSelector(state => state.userName)
  const { character, submit } = useLogin()
  const { register, formState: { errors }, handleSubmit, } = useForm();

  return (
    <div className='m-auto mt-3' >
      <ThemeSup/>
      <div className="pokegrid">     
          <h1 className='d-flex justify-content-center'>Welcome To Pokedex</h1>      
            <Form className='d-flex m-auto mb-2' onSubmit={handleSubmit(submit)}>
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
      {character && <div className='d-flex justify-content-center mb-1'>
        <CharacterCard url={character} />
      </div>}          
      </div>
      <ThemeBot />
    </div>
  );
};

export default UserLogin;
