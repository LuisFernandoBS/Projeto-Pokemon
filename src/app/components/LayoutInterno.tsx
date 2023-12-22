
import MenuLateral from '../components/MenuLateral'
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/page.module.css'
import '../styles/layout.css'

export default function LayoutInterno({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <Container fluid>
        <Row >
          <Col sm md lg xl="auto" className='px-0' id="divMenuLateral">
            <MenuLateral id="menuLateral" />
          </Col>
          <Col sm md lg xl="auto">
            <Container fluid className={styles.main}>{children}</Container>
          </Col>
        </Row>
      </Container>
    )
  }