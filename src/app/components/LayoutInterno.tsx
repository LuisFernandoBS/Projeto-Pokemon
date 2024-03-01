'use client';
import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import MenuLateral from '../components/MenuLateral'
import { Container, Row, Col } from 'react-bootstrap';
import { useAppSelector } from "../store/hooks.ts";
import { useDispatch } from 'react-redux';
import { setSituacaoMenu } from '../store/features/menu-lateral/menu-lateral-slice.ts';
import '../styles/layout.css'

export default function LayoutInterno({
    children,
  }: {
    children: React.ReactNode
  }) {
    const dispatch = useDispatch();

    const [isMenuMinimized, setMenuMinimized] = useState(false);
    const [tokenAD, setTokenAD] = useState(false);
    const menuState = useAppSelector((state) => state.menu);

    useEffect(()=>{
      const { ['nextauth.token']: token } = parseCookies();
      if (!token) {
        setTokenAD(false);
        window.location.href = '/';
        return;
      }      
      setMenuMinimized(menuState.fechado);
      setTokenAD(true);
    },[])

    const toggleMenu = () => {
        setMenuMinimized(!isMenuMinimized);
        dispatch(setSituacaoMenu({fechado:!isMenuMinimized}));
    };

    const divMenuLateralClasses = `px-0 ${isMenuMinimized ? 'menu-fechado' : 'menu-aberto'}`;
    const iconeBtnRecolheMenu = `${isMenuMinimized ? '>' : '<'}`;

    if (tokenAD) {
      return (
        <Container fluid className='overflow--hidden'>
          <Row >
            <Col sm md lg xl="auto" className={divMenuLateralClasses} id="divMenuLateral">
              <Row className='justify-content-end pe-3 mt-2'>
                <Col sm md lg xl="1" className='pe-2'>
                  <button id="btnControlaMenu" onClick={toggleMenu}>{iconeBtnRecolheMenu}</button>
                </Col>
              </Row>
              <MenuLateral id="menuLateral" menuMinimizado={isMenuMinimized} />
            </Col>
            <Col sm md lg xl="10" className='flex-fill'>
              <Container fluid className='px-0'>{children}</Container>
            </Col>
          </Row>
        </Container>
      )
    }
    return null;
  }