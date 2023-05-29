import '../App.css'
import React from 'react';
import Timg from '../img/index'
import { Card, ProgressBar } from 'react-bootstrap';
const StatsPoke = (data) => {
  let hp = (data.data[0]?.base_stat)
  let attack = (data.data[1]?.base_stat)
  let defense = (data.data[2]?.base_stat)
  let s_attack = (data.data[3]?.base_stat)
  let s_defense = (data.data[4]?.base_stat)
  let speed = (data.data[5]?.base_stat)
  return (
    <div className='progre'>
      <Card.Img style={{ width: '25px', height: '25px',marginLeft:'10px',marginRight:'10px' }} src={Timg.Heart.img} />
      <Card.Img style={{ width: '25px', height: '25px' ,marginLeft:'10px',marginRight:'10px'}} src={Timg.Sword.img} />
      <Card.Img style={{ width: '25px', height: '25px',marginLeft:'10px',marginRight:'10px' }} src={Timg.SAttack.img} />
      <Card.Img style={{ width: '25px', height: '25px',marginLeft:'10px',marginRight:'10px' }} src={Timg.Shield.img} />
      <Card.Img style={{ width: '25px', height: '25px',marginLeft:'10px',marginRight:'10px' }} src={Timg.SShield.img} />
      <Card.Img style={{ width: '25px', height: '25px',marginLeft:'10px',marginRight:'10px' }} src={Timg.Speed.img} />
      <ProgressBar animated variant='heart' style={{ height: '8px', marginBottom: '3px',marginLeft:'4px',marginRight:'4px' }} now={hp} label={`${hp}`} />
      <ProgressBar animated variant='sword' style={{ height: '8px', marginBottom: '3px',marginLeft:'4px',marginRight:'4px' }} now={attack} label={`${attack}`} />
      <ProgressBar animated variant='sattck' style={{ height: '8px', marginBottom: '3px',marginLeft:'4px',marginRight:'4px' }} now={s_attack} label={`${s_attack}`} />
      <ProgressBar animated variant='shield' style={{ height: '8px', marginBottom: '3px',marginLeft:'4px',marginRight:'4px' }} now={defense} label={`${defense}`} />
      <ProgressBar animated variant='sshield' style={{ height: '8px', marginBottom: '3px',marginLeft:'4px',marginRight:'4px' }} now={s_defense} label={`${s_defense}`} />
      <ProgressBar animated variant='speed' style={{ height: '8px', marginBottom: '3px',marginLeft:'4px',marginRight:'4px' }} now={speed} label={`${speed}`} />
    </div>
  );
};

export default StatsPoke;