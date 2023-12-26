"use client";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import styles from "../styles/page.module.css";

export default function CadastroUsuario() {
  const redirecionarPage = (ref: string) => {
    window.location.href = ref;
  };
  return (
    <main className={styles.main}>
      <section className="row">
        <h2 className="">Preencha as informações e crie seu cadastro. 🚀</h2>
        <Form>
          <Form.Group className="mb-3" controlId="nomeUsuario">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="name"
              placeholder="Informe como gostaria de ser chamado."
              maxLength={50}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="loginUsuario">
            <Form.Label>login:</Form.Label>
            <Form.Control type="text" placeholder="Informe seu login" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="senhaUsuario">
            <Form.Label>Senha:</Form.Label>
            <Form.Control type="password" placeholder="Informe sua senha" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button
            onClick={() => redirecionarPage("/")}
            className="mt-5 w-100"
            variant="primary"
            type="button"
          >
            Voltar
          </Button>
        </Form>
      </section>
    </main>
  );
}
