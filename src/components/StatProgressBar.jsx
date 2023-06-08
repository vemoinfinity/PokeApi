import React from 'react';
import { Card, Col, ProgressBar, Row } from 'react-bootstrap';


const StatProgressBar = ({ img, value,variant, width, height, heightbar,fontSize}) => (
  <Row>
    <Col lg={3} xs={3}className='d-flex'>
    <Card.Img style={{ width: width+'px', height: height+'px', marginLeft: '10px', marginRight: '10px' }} src={img} />
    <a style={{fontSize:fontSize +'px'}}>{value}</a>
    </Col>
    <Col>
    <ProgressBar animated variant={variant} style={{ height: heightbar+'px', marginRight: '10px' }} now={value}  />
    </Col>
  </Row>
);

export default StatProgressBar;