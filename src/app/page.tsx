'use client';
import React from 'react';
import styles from '././styles/page.module.css'
import Form  from "react-bootstrap/Form";
import {Button}  from "react-bootstrap";


export default function Home() {
  return (
    <main className={styles.main}>
         <section className="row">
            <Form>
                <Form.Group className="mb-3" controlId="login">
                    <Form.Label>login:</Form.Label>
                    <Form.Control type="text" placeholder="Informe seu login" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="senha">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control type="password" placeholder="Informe sua senha" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Entrar
                </Button>
            </Form>
                <Button variant="primary" type="submit">
                    Cadastrar Usuario
                </Button>
        </section>
    </main>
  )
}
