import React from 'react';

const AbilitiesPoke = ({ abilities }) => {
  return (
    <div>
      <b style={{ fontSize: '13px', color: 'red' }} >Abilitys:</b>
      {abilities.map(abilitys => (
        <div lg='auto' key={abilitys.ability.name}>
          <p className='mx-3' style={{ fontSize: '13px', margin: '0px' }} >{abilitys.ability.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AbilitiesPoke;