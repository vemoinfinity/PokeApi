import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import usePokeApi from '../hooks/usePokeApi';
import useSearchNavi from '../hooks/useSearchNavi';
import CharacterCard from './CharacterCard';

const Characters = () => {
  const name = useSelector(state => state.userName);
  const { characters, locationList, countup, countdo, pagenext, pageprev, searchTerm } = usePokeApi();
  const { searchName, searchLocation, pokeDetails } = useSearchNavi();
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-400">Welcome to Pokemon Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          <form className=" p-4 rounded-lg shadow" onSubmit={handleSubmit(searchName)}>
            <input
              {...register("name", { required: true })}
              list="suggest"
              type="text"
              placeholder="Search by name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
            <datalist id="suggest">
              <option>Select</option>
              {searchTerm.map(location => (
                <option key={location.url} value={location.name}>{location.name}</option>
              ))}
            </datalist>
            <button type="submit" className="mt-2 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
              Search
            </button>
          </form>
          <div className=" p-4 rounded-lg shadow">
            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Pokemon Locations
            </button>
            {isLocationOpen && (
              <div className="mt-2 max-h-60 overflow-y-auto bg-white/80">
                {locationList.map(location => (
                  <button
                    key={location.url}
                    onClick={() => searchLocation(location.name)}
                    className="w-full text-center hover:bg-gray-100 transition duration-300"
                  >
                    {location.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="md:col-span-3">
          <div className=" p-4 rounded-lg shadow mb-4 flex justify-between items-center">
            <button onClick={pageprev} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
              Previous
            </button>
            <span className="text-lg font-semibold text-white">
              Pokemons {countdo ? countdo : 1} to {countup}
            </span>
            <button onClick={pagenext} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
              Next
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characters.map(character => (
              <div key={character.url ? character.url : character} onClick={() => pokeDetails(character.name)} className="cursor-pointer transform hover:scale-105 transition duration-300">
                <CharacterCard url={character.url ? character.url : character} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;