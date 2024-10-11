import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import CharacterCard from './CharacterCard';
import useSearchNavi from '../hooks/useSearchNavi';

const Areas = () => {
  const location = useSelector(state => state.location);
  const { pokeDetails } = useSearchNavi();
  const [areas, setAreas] = useState([]);
  const [loAreas, setLoAreas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAreas = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/location/${location}`);
        setAreas(response.data.areas);
        setError(null);
      } catch (error) {
        console.error('Error fetching areas:', error);
        setError('Failed to load areas. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAreas();
  }, [location]);

  const mostrarea = async (url) => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setLoAreas(res.data.pokemon_encounters);
      setError(null);
    } catch (error) {
      console.error('Error fetching area details:', error);
      setError('Failed to load area details. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 bg-red-100 p-4 rounded-lg m-4">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" shadow-lg rounded-lg overflow-hidden mb-8">
        <h1 className="text-3xl font-bold text-center py-4 bg-red-500 text-white">{location} Areas</h1>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map(area => (
              <button
                key={area.name}
                onClick={() => mostrarea(area.url)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                {area.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loAreas && (
        <div className=" shadow-lg rounded-lg overflow-hidden">
          <h2 className="text-2xl font-bold text-center py-4 bg-red-500 text-white">Pokémon in this area</h2>
          <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {loAreas.map(loarea => (
                <div 
                  key={loarea.pokemon.name}
                  onClick={() => pokeDetails(loarea.pokemon.name)}
                  className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                >
                  <CharacterCard url={loarea.pokemon.url} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Areas;