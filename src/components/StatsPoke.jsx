import '../App.css'
import React from 'react';
import Timg from '../img/index'

import StatProgressBar from './StatProgressBar';
const StatsPoke = ({data,width, height,heightbar,fontSize}) => {
  const stats = data.map((stat, index) => {
    const img = [Timg.Heart.img, Timg.Sword.img, Timg.SAttack.img, Timg.Shield.img, Timg.SShield.img, Timg.Speed.img];
    const variants = ['heart', 'sword', 'sattck', 'shield', 'sshield', 'speed'];
    return <StatProgressBar key={index} img={img[index]} value={stat?.base_stat} variant={variants[index]} width={width} height={height} heightbar={heightbar} fontSize={fontSize}/>;
  });
  return (
    <div className='progre'>
      {stats}
     </div>
  );
};

export default StatsPoke;