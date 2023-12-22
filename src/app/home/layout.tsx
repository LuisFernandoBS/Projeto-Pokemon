import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateral from '../components/MenuLateral'
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/globals.css'
import '../styles/layout.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Projeto Pokemon',
  description: 'Projeto Pokemon',
}

export default function RootLayout({
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
          <Container fluid className="overflow-hidden">{children}</Container>
        </Col>
      </Row>
    </Container> 
  )
}
