import React from 'react';
import { typeColors, typeIcons } from './pokemonTypes';

const TypePo = ({ data, type, width, height }) => {
  const lowercaseType = data.toLowerCase();
  const backgroundColor = typeColors[lowercaseType] || 'bg-gray-300';
  const iconSrc = typeIcons[lowercaseType];

  React.useEffect(() => {
    if (type && typeof type === 'function') {
      type(data);
    }
  }, [data, type]);

  if (!iconSrc) {
    return null;
  }

  return (
    <div 
      className={`flex items-center justify-center rounded-full `}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img 
        src={iconSrc} 
        alt={`${data} type`}
        className="w-3/4 h-3/4 object-contain"
      />
    </div>
  );
};

export default TypePo;