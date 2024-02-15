"use client";
import Form from "react-bootstrap/Form";
import React from "react";
import { Container, Carousel, Button, Row, Col, Card } from "react-bootstrap";
import styles from "../styles/page.module.css";
import "../styles/cadastro/style.css";
import axios from "axios";

export default function CadastroUsuario() {
  const classMain = `background__cadastro flex-column justify-content-center px-2 ${styles.main}`;
  const [cartaUsuario, setCartaUsuario] = React.useState("");
  const [nomeUsuario, setNomeUsuario] = React.useState("");
  const [loginUsuario, setLoginUsuario] = React.useState("");
  const [senhaUsuario, setSenhaUsuario] = React.useState("");

  const salvarCartaEscolhida = (cartaEscolhida: string) => {
    const divCartas = document.querySelector("#divGridCartas");
    const divPokebola = document.querySelector("#divPokebola");
    const textoEscolherPokemon = document.querySelector(
      "#textoEscolherPokemon"
    );

    divCartas && divCartas.classList.add("d-none");
    divPokebola && divPokebola.classList.remove("d-none");

    if (textoEscolherPokemon) {
      textoEscolherPokemon.textContent = `Parabens seu ${cartaEscolhida} foi capturado!`;
      setCartaUsuario(cartaEscolhida);
    }
  };

  const cadastrarUsuario = async () => {
    const dadosRequisicao = {
      nome: nomeUsuario,
      user: loginUsuario,
      senha: senhaUsuario,
      carta: cartaUsuario,
    };

    await axios
      .post(
        "https://api-projeto-pokemon.vercel.app/api/usuario",
        dadosRequisicao
      )
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  return (
    <main className={classMain}>
      <Container fluid>
        <Row className="justify-content-center">
          <Col
            className="fundo__form-cadastro py-5"
            xs={12}
            lg={10}
            xl={9}
            xxl={8}
          >
            <Form>
              <Form.Group className="mb-4">
                <Row className="text-center">
                  <h3 className="kanit__semi_bold-italic">
                    Cadastro do Jogador
                  </h3>
                </Row>
              </Form.Group>
              <Form.Group className="mb-4" controlId="nomeUsuario">
                <Row className="justify-content-center">
                  <Form.Label
                    className="kanit__semi-bold"
                    column
                    xs={12}
                    md={8}
                    xl={6}
                    xxl={5}
                    maxLength={50}
                  >
                    Nome :
                  </Form.Label>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} md={8} xl={6} xxl={5}>
                    <Form.Control
                      type="text"
                      value={nomeUsuario}
                      onChange={(e) => {
                        setNomeUsuario(e.target.value);
                      }}
                      placeholder="Informe como gostaria de ser chamado."
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-4" controlId="loginUsuario">
                <Row className="justify-content-center">
                  <Form.Label
                    className="kanit__semi-bold"
                    column
                    xs={12}
                    md={8}
                    xl={6}
                    xxl={5}
                    maxLength={30}
                  >
                    Login :
                  </Form.Label>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} md={8} xl={6} xxl={5}>
                    <Form.Control
                      type="text"
                      placeholder="Informe um login."
                      value={loginUsuario}
                      onChange={(e) => {
                        setLoginUsuario(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-4" controlId="senhaUsuario">
                <Row className="justify-content-center">
                  <Form.Label
                    className="kanit__semi-bold"
                    column
                    xs={12}
                    md={8}
                    xl={6}
                    xxl={5}
                    maxLength={25}
                  >
                    Senha :
                  </Form.Label>
                </Row>
                <Row className="justify-content-center">
                  <Col xs={12} md={8} xl={6} xxl={5}>
                    <Form.Control
                      type="password"
                      placeholder="Informe uma senha."
                      value={senhaUsuario}
                      onChange={(e) => {
                        setSenhaUsuario(e.target.value);
                      }}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mt-5">
                <Row className="text-center">
                  <h3 id="textoEscolherPokemon">Escolha sua carta inicial</h3>
                </Row>
              </Form.Group>
              <Form.Group
                as={Row}
                id="divCarroselCartas"
                className="mt-2 justify-content-center"
              >
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://assets.tcgdex.net/pt/sv/sv03.5/001/high.png"
                      />
                    </Card>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://assets.tcgdex.net/pt/sv/sv03.5/004/high.png"
                      />
                    </Card>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://assets.tcgdex.net/pt/sv/sv03.5/007/high.png"
                      />
                    </Card>
                  </Carousel.Item>
                </Carousel>
              </Form.Group>
              <Form.Group
                as={Row}
                id="divGridCartas"
                className="mt-2 justify-content-center"
              >
                <Col className="mt-md-4" xs={12} sm={6} md={3}>
                  <Card className="card__cadastro card__bulbasaur">
                    <Card.Img
                      onClick={() => salvarCartaEscolhida("Bulbasaur")}
                      className="img_cadastro"
                      role="button"
                      variant="top"
                      src="https://assets.tcgdex.net/pt/sv/sv03.5/001/high.png"
                    />
                  </Card>
                </Col>
                <Col className="mt-md-4" xs={12} sm={6} md={3}>
                  <Card className="card__cadastro card__charmander">
                    <Card.Img
                      onClick={() => salvarCartaEscolhida("Charmander")}
                      className="img_cadastro"
                      role="button"
                      variant="top"
                      src="https://assets.tcgdex.net/pt/sv/sv03.5/004/high.png"
                    />
                  </Card>
                </Col>
                <Col className="mt-md-4" xs={12} sm={6} md={3}>
                  <Card className="card__cadastro card__squirtle">
                    <Card.Img
                      onClick={() => salvarCartaEscolhida("Squirtle")}
                      className="img_cadastro"
                      role="button"
                      variant="top"
                      src="https://assets.tcgdex.net/pt/sv/sv03.5/007/high.png"
                    />
                  </Card>
                </Col>
              </Form.Group>
              <Form.Group
                as={Row}
                id="divPokebola"
                className="mt-2 justify-content-center d-none"
              >
                <Col
                  className="mt-md-4 img__pokebola"
                  xs={12}
                  sm={6}
                  md={3}
                ></Col>
              </Form.Group>
              <Form.Group as={Row} className="mt-4 justify-content-center">
                <Col className="mt-md-4" xs={12} sm={6} md={4} xl={3} xxl={2}>
                  <Button
                    onClick={() => cadastrarUsuario()}
                    className="mt-4 w-100"
                    variant="primary"
                    type="button"
                  >
                    Salvar Cadastro
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
