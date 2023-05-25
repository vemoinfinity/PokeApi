import React from 'react';
import TipoImg from '../img/index'
import { Card } from 'react-bootstrap';
const TypePo = ({ data, type }) => {
  let img1 = null
  switch (data) {
    case TipoImg.Steel.info:
      img1 = TipoImg.Steel.img;
      type(TipoImg.Steel.info)
      break;
    case TipoImg.Normal.info:
      img1 = TipoImg.Normal.img;
      type(TipoImg.Normal.info)
      break;
    case TipoImg.Fighting.info:
      img1 = TipoImg.Fighting.img;
      type(TipoImg.Fighting.info)
      break;
    case TipoImg.Flying.info:
      img1 = TipoImg.Flying.img;
      type(TipoImg.Flying.info)
      break;
    case TipoImg.Poison.info:
      img1 = TipoImg.Poison.img;
      type(TipoImg.Poison.info)
      break;
    case TipoImg.Ground.info:
      img1 = TipoImg.Ground.img;
      type(TipoImg.Ground.info)
      break;
    case TipoImg.Rock.info:
      img1 = TipoImg.Rock.img;
      type(TipoImg.Rock.info)
      break;
    case TipoImg.Bug.info:
      img1 = TipoImg.Bug.img;
      type(TipoImg.Bug.info)
      break;
    case TipoImg.Ghost.info:
      img1 = TipoImg.Ghost.img;
      type(TipoImg.Ghost.info)
      break;
    case TipoImg.Fire.info:
      img1 = TipoImg.Fire.img;
      type(TipoImg.Fire.info)
      break;
    case TipoImg.Water.info:
      img1 = TipoImg.Water.img;
      type(TipoImg.Water.info)
      break;
    case TipoImg.Grass.info:
      img1 = TipoImg.Grass.img;
      type(TipoImg.Grass.info)
      break;
    case TipoImg.Electric.info:
      img1 = TipoImg.Electric.img;
      type(TipoImg.Electric.info)
      break;
    case TipoImg.Psychic.info:
      img1 = TipoImg.Psychic.img;
      type(TipoImg.Psychic.info)
      break;
    case TipoImg.Ice.info:
      img1 = TipoImg.Ice.img;
      type(TipoImg.Ice.info)
      break;
    case TipoImg.Dragon.info:
      img1 = TipoImg.Dragon.img;
      type(TipoImg.Dragon.info)
      break;
    case TipoImg.Dark.info:
      img1 = TipoImg.Dark.img;
      type(TipoImg.Dark.info)
      break;
    case TipoImg.Fairy.info:
      img1 = TipoImg.Fairy.img;
      type(TipoImg.Fairy.info)
      break;
    case TipoImg.Unknown.info:
      img1 = TipoImg.Unknown.img;
      type(TipoImg.Unknown.info)
      break;
    case TipoImg.Shadow.info:
      img1 = TipoImg.Shadow.img;
      type(TipoImg.Shadow.info)
      break;
  }
  return (
    <div>
      {img1 &&
        <Card.Img style={{ width: '28px', height: '28px' }} src={img1} />
      }
    </div>
  );
};

export default TypePo;