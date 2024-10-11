import React from 'react';

const AbilitiesPoke = ({ abilities, fontSizeA, fontSizeDescrip }) => {
  return (
    <div className="space-y-2">
      {abilities.map((ability) => (
        <div
          key={ability.ability.name}
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-2 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          <h4 className={`text-white font-bold mb-1 ${fontSizeA}`}>
            {ability.ability.name}
          </h4>
          <p className={`text-gray-200 ${fontSizeDescrip}`}>
            {ability.is_hidden ? 'Hidden Ability' : 'Regular Ability'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AbilitiesPoke;