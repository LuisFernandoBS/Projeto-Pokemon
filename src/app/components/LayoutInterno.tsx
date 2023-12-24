'use client';
import { useState } from 'react';
import MenuLateral from '../components/MenuLateral'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/page.module.css'
import '../styles/layout.css'

export default function LayoutInterno({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [isMenuMinimized, setMenuMinimized] = useState(false);

    const toggleMenu = () => {
        setMenuMinimized(!isMenuMinimized);
    };

    const divMenuLateralClasses = `px-0 ${isMenuMinimized ? 'menu-fechado' : 'menu-aberto'}`;
    const iconeBtnRecolheMenu = `${isMenuMinimized ? '>' : '<'}`;

    return (
      <Container fluid>
        <Row >
          <Col sm md lg xl="auto" className={divMenuLateralClasses} id="divMenuLateral">
            <Row className='justify-content-end pe-3 mt-2'>
              <Col sm md lg xl="1" className='pe-2'>
                <button id="btnControlaMenu" onClick={toggleMenu}>{iconeBtnRecolheMenu}</button>
              </Col>
            </Row>
            <MenuLateral id="menuLateral" />
          </Col>
          <Col sm md lg xl="auto">
            <Container fluid className={styles.main}>{children}</Container>
          </Col>
        </Row>
      </Container>
    )
  }