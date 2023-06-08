import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AbilitiesPoke = ({ abilities,fontSizeA,fontSizeDescrip }) => (
  <Row>
    <div className='d-flex'>
      <Col>
        <b style={{ fontSize: fontSizeA+'px', color: 'red' }} >Abilitys:</b>
      </Col>
      <Col lg={8}xs={8}>
        {abilities.map(abilitys => (
          <p className='mx-3' key={abilitys.ability.name} style={{ fontSize: fontSizeDescrip+'px', margin: '0px' }} >{abilitys.ability.name}</p>
        ))}
      </Col>
    </div>
  </Row>
);


export default AbilitiesPoke;