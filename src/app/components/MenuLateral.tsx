'use client'
import React from 'react';
import { Navbar, Nav, Image, Row, Col } from 'react-bootstrap';

interface MenuLateralProps {
    id: string;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ id }) => {
  return (
    <Navbar bg="dark" variant="dark" className="flex-column h-100" id={id}>
      <Navbar.Brand href="#home">
        <Image className='me-2' src="/favicon.ico" rounded  width={35} height={35}/>
        <p className='fs-6'>
            PokeDeck Store
        </p>
      </Navbar.Brand>
      <Nav className="flex-column gap-2">
        <Nav.Link href="#dashboard">
            <Image className='me-2' src="/img/principal.png" rounded  width={30} height={30}/>
            Dashboard
        </Nav.Link>
        <Nav.Link href="#profile">Profile</Nav.Link>
        <Nav.Link href="#settings">Settings</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MenuLateral;