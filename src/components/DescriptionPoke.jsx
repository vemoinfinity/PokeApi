import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DescriptionPoke = ({ url }) => {
  const [character, setCharacter] = useState({})
  useEffect(() => {
    axios.get(url)
      .then(res => setCharacter(res.data))
  }, [])
  const effect_entries = character.effect_entries

  return (
    <div>
      {character.name}
      {effect_entries &&
        effect_entries.map(effects => (
          <div key={effects.effect}>
            {effects.language.name === 'en' &&
              effects.effect
            }
          </div>
        ))}
      <br />
    </div>
  );
};

export default DescriptionPoke;