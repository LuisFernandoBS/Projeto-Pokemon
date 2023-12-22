'use client';
import React from 'react';
import {Navbar, Nav, Image} from 'react-bootstrap';

interface MenuLateralProps {
    id: string;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ id }) => {
  return (
    <Navbar className="flex-column d-inline-flex h-100" id={id}>
      <Navbar.Brand className='d-flex' href="#home">
        <Image className='me-2' src="/img/eevee.png" rounded  width={35} height={35}/>
        <p className='h6 fs-6'>
            Pokemon Store
        </p>
      </Navbar.Brand>
      <Nav className="flex-column gap-2">
        <Nav.Link href="#dashboard">
            <Image className='me-2' src="/img/principal.png" rounded  width={30} height={30}/>
            Dashboard
        </Nav.Link>
        <Nav.Link href="#profile">
          <Image className='me-2' src="/img/admin.png" rounded  width={30} height={30}/>
          Admin
        </Nav.Link>
        <Nav.Link href="#settings">
          <Image className='me-2' src="/img/exit.png" rounded  width={30} height={30}/>
          Sair
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MenuLateral;