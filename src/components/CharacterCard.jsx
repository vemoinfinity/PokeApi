import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatsPoke from './StatsPoke';
import TypePo from './TypePo';
import AbilitiesPoke from './AbilitiesPoke';
import { typeColors } from './pokemonTypes';

const CharacterCard = ({ url }) => {
  const [character, setCharacter] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-100');

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setCharacter(res.data);
        if (res.data.types && res.data.types.length > 0) {
          const primaryType = res.data.types[0].type.name.toLowerCase();
          setBackgroundColor(typeColors[primaryType] || 'bg-gray-100');
        }
      });
  }, [url]);

  const heightmeters = ((character.height || 0) * 0.1).toFixed(2);
  const weightkg = ((character.weight || 0) * 0.1).toFixed(2);
  const types = character.types || [];
  const abilities = character.abilities || [];
  const stats = character.stats || [];

  // Extract the color name from the background class
  const colorName = backgroundColor.replace('bg-', '');

  return (
    <div className={`w-64 h-96 rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105 ${backgroundColor} shadow-lg relative group`}>
      <div className="relative h-full">
        <div className={`absolute inset-0 bg-gradient-to-b from-${colorName} to-white opacity-50`}></div>
        <div className="relative z-10 p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold capitalize">{character.name}</h2>
            <div className="flex space-x-1">
              {types.map(typ => (
                <TypePo 
                  key={typ.type.name} 
                  data={typ.type.name} 
                  type={() => {}} 
                  width={28} 
                  height={28} 
                />
              ))}
            </div>
          </div>
          <div className="relative mb-4 group-hover:opacity-0 transition-opacity duration-300">
            <div className={`w-full h-48 rounded-3xl ${backgroundColor} flex items-center justify-center overflow-hidden`}>
              <img
                className="w-56 h-56 object-contain"
                src={character.sprites?.other.home.front_default || character.sprites?.front_default}
                alt={`${character.name} sprite`}
              />
            </div>
          </div>
          <div className=" bg-opacity-70 rounded-lg p-3 mb-3 group-hover:opacity-0 transition-opacity duration-300">
            <p className="text-sm text-center font-semibold">
               HT: {heightmeters}m  WT: {weightkg}kg
            </p>
            <div className="mt-2">
              <h3 className="text-sm font-bold mb-1">Abilities:</h3>
              <AbilitiesPoke abilities={abilities} fontSizeA='text-xs' fontSizeDescrip='text-xs' />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover effect for stats */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="relative w-full h-full">
          <div 
            className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-30"
            style={{
              backgroundImage: `url(${character.sprites?.other.home.front_default || character.sprites?.front_default})`
            }}
          ></div>
          <div className="relative z-10 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Stats</h3>
            <StatsPoke data={stats} width={20} height={20} heightbar={6} fontSize={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;