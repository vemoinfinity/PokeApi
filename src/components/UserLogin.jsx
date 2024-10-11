import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import useLogin from '../hooks/useLogin';
import CharacterCard from './CharacterCard';

const UserLogin = () => {
  const userName = useSelector(state => state.userName);
  const { character, submit } = useLogin();
  const { register, formState: { errors }, handleSubmit } = useForm();

  return (
    <div className="m-auto pt-4">
     
      <div className="pokegrid  rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center bg-red-500 text-white p-4">Welcome To Pokedex</h1>
        <div className="p-6">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit(submit)}>
            <input
              {...register("name", { required: true })}
              placeholder="Enter your username"
              type="text"
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 text-sm">The name field is required</p>
            )}
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
              Send
            </button>
          </form>
          {character && (
            <div className="flex justify-center mt-4">
              <CharacterCard url={character} />
            </div>
          )}
        </div>
      </div>
     
    </div>
  );
};

export default UserLogin;