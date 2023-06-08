import React from 'react';
import TipoImg from '../img/index'
import { Card } from 'react-bootstrap';
const typeMapping = {
  [TipoImg.Steel.info]: TipoImg.Steel.img,
  [TipoImg.Normal.info]: TipoImg.Normal.img,
  [TipoImg.Fighting.info]: TipoImg.Fighting.img,
  [TipoImg.Flying.info]: TipoImg.Flying.img,
  [TipoImg.Poison.info]: TipoImg.Poison.img,
  [TipoImg.Ground.info]: TipoImg.Ground.img,
  [TipoImg.Rock.info]: TipoImg.Rock.img,
  [TipoImg.Bug.info]: TipoImg.Bug.img,
  [TipoImg.Ghost.info]: TipoImg.Ghost.img,
  [TipoImg.Fire.info]: TipoImg.Fire.img,
  [TipoImg.Water.info]: TipoImg.Water.img,
  [TipoImg.Grass.info]: TipoImg.Grass.img,
  [TipoImg.Electric.info]: TipoImg.Electric.img,
  [TipoImg.Psychic.info]: TipoImg.Psychic.img,
  [TipoImg.Ice.info]: TipoImg.Ice.img,
  [TipoImg.Dragon.info]: TipoImg.Dragon.img,
  [TipoImg.Dark.info]: TipoImg.Dark.img,
  [TipoImg.Fairy.info]: TipoImg.Fairy.img,
  [TipoImg.Unknown.info]: TipoImg.Unknown.img,
  [TipoImg.Shadow.info]: TipoImg.Shadow.img,
};
const TypePo = ({ data, type,width,height }) => {
  const img1 = typeMapping[data];

  if (img1) {
    type(data);
  }
  return (
    <div>
      {img1 &&
        <Card.Img style={{ width: width+'px', height: height+'px' }} src={img1} />
      }
    </div>
  );
};

export default TypePo;