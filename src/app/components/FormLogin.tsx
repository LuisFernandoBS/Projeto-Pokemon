'use client'

import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { setCookie, parseCookies } from 'nookies'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUsuario } from '../store/features/usuario/usuario-slice.ts';


type DataResp = {
    error: boolean,
    message: string,
    statusCode: number,
    result: object
}

type SignInData = {
  user: string;
  senha: string;
}


const FormLogin = ()=>{
    const dispatch = useDispatch();

    const [loginUsuario, setLoginUsuario] = React.useState("");
    const [senhaUsuario, setSenhaUsuario] = React.useState("");

    const redirecionarPage = (ref: string) => {
        window.location.href = ref;
    };

    async function logar({ user, senha }: SignInData) {
      let resp = await axios.post('https://api-projeto-pokemon.vercel.app/api/logar', {
          user: user,
          senha: senha
      })
      .then(async function (response) {        
          if (response.data.result['token']) {            
              setCookie(undefined, 'nextauth.token', response.data.result['token'], {
                  maxAge: 60 * 60 * 1, // 1 hour
              })
          }
          return response.data;
      })
      .catch(function (error:object) {
          return error;
      });
      
  
      return resp;
    }

    async function consultarUsuario() {
        const { ['nextauth.token']: token } = parseCookies();

        let resp = await axios.get('https://api-projeto-pokemon.vercel.app/api/usuario/consulta-dados-usuario',{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(function (response) {   
            if (response.data.result) {     
                let dadosRetorno = response.data.result;               
                dispatch(setUsuario({
                    nome:dadosRetorno.nome,
                    admin:dadosRetorno.admin,
                    cartaSelecionada:dadosRetorno.carta_selecionada,
                    user:dadosRetorno.user
                }));
            }
            return;
        })
        .catch(function (error:object) {
            return error;
        });
        

        return resp;
    }
      
    async function realizarLogin() {
      const dadosRequisicao = {
        user: loginUsuario,
        senha: senhaUsuario,
      };
      let resp:DataResp = await logar(dadosRequisicao);
      if (!resp.error && resp.statusCode === 200) {
        await consultarUsuario();
        redirecionarPage('/admin');
      }else{
        alert(resp.message);
      }
    }

    return(
        <>
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
                    <Form.Control 
                        type="text" 
                        placeholder="Informe seu login" 
                        value={loginUsuario}
                        onChange={(e) => {
                        setLoginUsuario(e.target.value);
                        }}
                    />
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
                        value={senhaUsuario}
                        onChange={(e) => {
                        setSenhaUsuario(e.target.value);
                        }}
                    />
                    </Col>
                </Row>
                </Form.Group>
                <Form.Group as={Row} className="mt-4 justify-content-center">
                <Col className="mt-md-4" xs={12} sm={6} md={4} xl={3} xxl={2}>
                    <Button
                    onClick={() => realizarLogin()}
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
        </>
    )
}

export default FormLogin;