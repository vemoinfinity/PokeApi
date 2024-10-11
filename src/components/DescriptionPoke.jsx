import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DescriptionPoke = ({ url }) => {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setCharacter(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching character data:', error);
        setError('Failed to load ability information. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacter();
  }, [url]);

  const effect_entries = character.effect_entries || [];
  const englishEffect = effect_entries.find(entry => entry.language.name === 'en');

  if (isLoading) {
    return <div className="animate-pulse bg-gray-200 h-32 rounded-lg"></div>;
  }

  if (error) {
    return <div className="text-red-500 bg-red-100 p-4 rounded-lg">{error}</div>;
  }

  return (
    <div className=" shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 capitalize">{character.name}</h2>
      {englishEffect ? (
        <p className="text-gray-600 leading-relaxed">
          {englishEffect.effect}
        </p>
      ) : (
        <p className="text-gray-500 italic">No English description available.</p>
      )}
    </div>
  );
};

export default DescriptionPoke;