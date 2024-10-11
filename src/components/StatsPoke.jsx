import React from 'react';
import Timg from '../img/index';
import StatProgressBar from './StatProgressBar';

const StatsPoke = ({ data, width, height, heightbar, fontSize }) => {
  const statIcons = [
    Timg.Heart.img,
    Timg.Sword.img,
    Timg.SAttack.img,
    Timg.Shield.img,
    Timg.SShield.img,
    Timg.Speed.img
  ];

  const statVariants = ['danger', 'primary', 'warning', 'success', 'info', 'secondary'];

  const stats = data.map((stat, index) => (
    <StatProgressBar
      key={index}
      img={statIcons[index]}
      value={stat?.base_stat}
      variant={statVariants[index]}
      width={width}
      height={height}
      heightbar={heightbar}
      fontSize={fontSize}
    />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stats}
    </div>
  );
};

export default StatsPoke;