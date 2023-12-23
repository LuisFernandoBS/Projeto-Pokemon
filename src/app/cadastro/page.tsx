'use client';
import Form  from "react-bootstrap/Form";
import {Button}  from "react-bootstrap";
import styles from "../styles/page.module.css";

export default function CadastroUsuario() {
return (
    <main className={styles.main}>
        <section className="row">
            <h2 className="">Preencha as informações e crie seu cadastro. 🚀</h2>
            <Form>
                <Form.Group className="mb-3" controlId="nomeUsuario">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="name" placeholder="Informe como gostaria de ser chamado." maxLength={50} />
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
            </Form>
        </section>
    </main>
  );
}
