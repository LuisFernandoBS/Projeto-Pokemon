import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuLateral from './components/MenuLateral'
import { Container, Row, Col } from 'react-bootstrap';
import './globals.css'

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
    <html lang="en">
      <body>
        <Container fluid>
          <Row >
            <Col sm md lg xl={1} className='px-0'>
              <MenuLateral id="menuLateral" />
            </Col>
            <Col sm md lg xl={11}>
              <Container fluid className="overflow-hidden">{children}</Container>
            </Col>
          </Row>
        </Container> 
      </body>
    </html>
  )
}
