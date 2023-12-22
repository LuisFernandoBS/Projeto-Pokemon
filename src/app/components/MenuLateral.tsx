'use client';
import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

interface MenuLateralProps {
    id: string;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ id }) => {
  return (
    <Row className="flex-column d-inline-flex h-100 px-2" id={id}>
      <Col sm md lg xl="12" className='d-flex mt-1 align-items-center mb-3' href="#home">
        <Image className='me-2' src="/img/eevee.png" rounded  width={35} height={35}/>
        <p className='h6 fs-6 mb-0'>
            Pokemon Store
        </p>
      </Col>
      <Col sm md lg xl="auto" className='ps-3'>
      <hr />
        <Row href="home" className='mt-4 py-2' role="button">
          <Col sm md lg xl="2">
            <Image className='me-2' src="/img/principal.png" rounded  width={30} height={30}/>
          </Col>
          <Col sm md lg xl="10" className='ps-4 align-self-center'>
            <label role="button">DASHBOARD</label>
          </Col>
        </Row>
        <Row href="#profile" className='mt-4 py-2' role="button">
          <Col sm md lg xl="2">
            <Image className='me-2' src="/img/star.png" rounded  width={30} height={30}/>
          </Col>
          <Col sm md lg xl="10" className='ps-4 align-self-center'>
            <label role="button">ADMIN</label> 
          </Col>
        </Row>
        <Row href="#settings" className='mt-4 py-2' role="button">
          <Col sm md lg xl="2">
            <Image className='me-2' src="/img/exit.png" rounded  width={30} height={30}/>
          </Col>
          <Col sm md lg xl="10" className='ps-4 align-self-center'>
            <label role="button">SAIR</label>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MenuLateral;