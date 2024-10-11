import React, { useState, useEffect } from 'react';
import usePokeApi from '../hooks/usePokeApi';
import DescriptionPoke from './DescriptionPoke';
import StatsPoke from './StatsPoke';
import TypePo from './TypePo';
import { typeColors } from './pokemonTypes';
import back from '../img/pokeback.webp'

const CharacterDetail = () => {
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-100');
  const { pokeunits } = usePokeApi();
  const abilities = pokeunits.abilities || [];
  const stats = pokeunits.stats || [];
  const types = pokeunits.types || [];

  useEffect(() => {
    if (types.length > 0) {
      const primaryType = types[0].type.name.toLowerCase();
      setBackgroundColor(typeColors[primaryType] || 'bg-gray-100');
    }
  }, [types]);

  return (
    <div className={`min-h-screen ${backgroundColor} transition-colors duration-500 py-10`}>
      <div className="container mx-auto px-4">
        <div className={` bg-cover bg-center rounded-3xl shadow-2xl overflow-hidden`} style={{ backgroundImage: `url(${back})` }}>
          <div className={`${backgroundColor} p-6 flex justify-between items-center`}>
            <h1 className="text-4xl font-bold capitalize text-white">{pokeunits.name}</h1>
            <h2 className="text-3xl font-bold text-white">#{pokeunits.order}</h2>
          </div>
          
          <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 flex flex-col justify-center">
              <div className={`rounded-3xl overflow-hidden ${backgroundColor} bg-opacity-70 p-8 shadow-inner`}>
                <img
                  src={pokeunits.sprites?.other.home.front_default || pokeunits.sprites?.front_default}
                  alt={`${pokeunits.name} sprite`}
                  className="w-full h-auto object-contain transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                {types.map(typ => (
                  <TypePo 
                    key={typ.type.name} 
                    data={typ.type.name} 
                    type={() => {}} 
                    width={60} 
                    height={60} 
                  />
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div className={`${backgroundColor} bg-opacity-70 rounded-2xl p-6 shadow-md`}>
                <h3 className="text-2xl font-semibold mb-4">Abilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {abilities.map(ability => (
                    <DescriptionPoke key={ability.ability.url} url={ability.ability.url} />
                  ))}
                </div>
              </div>
              
              <div className={`${backgroundColor} bg-opacity-70 rounded-2xl p-6 shadow-md`}>
                <h3 className="text-2xl font-semibold mb-4">Stats</h3>
                {stats && <StatsPoke data={stats} width={50} height={50} heightbar={9} fontSize={16} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;