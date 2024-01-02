"use client";
import React from "react";
import styles from "././styles/page.module.css";
import Form from "react-bootstrap/Form";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./styles/login/style.css";

export default function Home() {
  const classMain = `background__login flex-column justify-content-center ${styles.main}`;
  const redirecionarPage = (ref: string) => {
    window.location.href = ref;
  };

  return (
    <main className={classMain}>
      <Container fluid>
        <Row>
          <Form>
            <Form.Group className="mb-4" controlId="login">
              <Row className="justify-content-center">
                <Form.Label
                  className="text-secondary-emphasis text-uppercase kanit__semi-bold font-size-sm-18"
                  column
                  xs={12}
                  md={8}
                  xl={6}
                  xxl={4}
                >
                  Login :
                </Form.Label>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} md={8} xl={6} xxl={4}>
                  <Form.Control type="text" placeholder="Informe seu login" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-4" controlId="senha">
              <Row className="justify-content-center">
                <Form.Label
                  className="text-secondary-emphasis text-uppercase kanit__semi-bold font-size-sm-18"
                  column
                  xs={12}
                  md={8}
                  xl={6}
                  xxl={4}
                >
                  Senha :
                </Form.Label>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} md={8} xl={6} xxl={4}>
                  <Form.Control
                    type="password"
                    placeholder="Informe sua senha"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Row} className="mt-4 justify-content-center">
              <Col className="mt-md-4" xs={12} sm={6} md={4} xl={3} xxl={2}>
                <Button
                  onClick={() => redirecionarPage("/admin")}
                  className="mt-4 w-100"
                  variant="primary"
                  type="button"
                >
                  Entrar
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Row>
        <Row className="mt-5 justify-content-center">
          <Col className="mt-5" xs={12} sm={6} md={4} xl={3} xxl={2}>
            <Button
              onClick={() => redirecionarPage("/cadastro")}
              className="mt-5 w-100"
              variant="primary"
              type="button"
            >
              Cadastrar Usuario
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
