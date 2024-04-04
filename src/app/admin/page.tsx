"use client"
import React, { useEffect , useState } from 'react';
import axios from 'axios';
import {Row, Col, Form , Button} from 'react-bootstrap';
import { BiSearchAlt } from "react-icons/bi";
import { useAppSelector } from "../store/hooks.ts";

import styles from '../styles/page.module.css'
import ListaCards from '../components/ListaCards'

interface PokemonCard {
  id: number;
  image: string;
  name:string;
  localId:string;
}

export default function Admin() {

  let requisicaoInicial = 1;
  const classeMain = `p-1 ${styles.main}`;
  
  const usuario = useAppSelector((state) => state.usuario);
  const [cardNaoEncontrado, setCardNaoEncontrado] = useState<boolean>(false);
  const [textoPesquisa, setTextoPesquisa] = useState<string>("");
  const [listaCardsRequisicaoBackup, setListaCardsRequisicaoBackup] = useState<PokemonCard[]>([]);
  const [listaCardsRequisicao, setListaCardsRequisicao] = useState<PokemonCard[]>([]);

  let displayCardNaoEncontrado = `${cardNaoEncontrado?'d-block':'d-none'} mt-4`;

  const buscarListaCardPokemon  = async () => {
    requisicaoInicial -= 1;
    try {
      const resposta = await axios.get('https://api.tcgdex.net/v2/pt/cards');

      let listaCards = validarPaginarObjetos(resposta.data);    
      setListaCardsRequisicao(listaCards);
      setListaCardsRequisicaoBackup(listaCards);
    } catch (erro:any) {
      console.error('Erro na requisição:', erro.message);
    }
  };

  useEffect(() => {
    requisicaoInicial && buscarListaCardPokemon();
  }, []);

  const validarPaginarObjetos  = (lista: PokemonCard[][]) => {
    let listaObjetosValidos = lista.flat().filter((card: PokemonCard) => {
      return card.image && card.id;
    });
    return listaObjetosValidos;
  }

  const filtrarCardsPokemon  = () => {
    if(textoPesquisa.trim()) {      

      let listaObjetosAchados = listaCardsRequisicaoBackup.flat().filter((card: PokemonCard) => {  
        let nomeCard = card.name.toUpperCase();
              
        return nomeCard.indexOf(textoPesquisa.trim().toUpperCase()) !== -1 && card.image && card.id;
      });

      setListaCardsRequisicao(listaObjetosAchados);
      listaObjetosAchados.length == 0 && setCardNaoEncontrado(true);
      listaObjetosAchados.length != 0 && setCardNaoEncontrado(false);
      return;
    }

    setListaCardsRequisicao(listaCardsRequisicaoBackup);
  }

  return (
    <main className={classeMain}>
      <div>
        <Row>
          <Col className="text-center" sm md lg xl={12}><h3>Admin</h3></Col>
        </Row>
        <Row className='justify-content-center'>
          <Col className="text-center" sm md lg xl={2}></Col>
          <Col className="text-center" sm md lg xl={5}>
            <Form.Control
              type="text"
              placeholder="Procure por um pokemon"
              onChange={(e) => {
                setTextoPesquisa(e.target.value);
              }}
            />
          </Col>
          <Col className="text-start ps-0" sm md lg xl={2}>
              <Button
                onClick={() => filtrarCardsPokemon()}
                className="rounded btn-padrao"
                variant="primary"
                type="button"
              >
              <BiSearchAlt />
              </Button>
          </Col>
        </Row>
        <Row className='mt-4'>
            <Col sm md lg xl={12}>
              <ListaCards lista={listaCardsRequisicao} id='listaCardsPokemon' />
            </Col>
        </Row>
        <Row className={displayCardNaoEncontrado}>
            <Col sm md lg xl={12} className='text-center'>
              <h2 className='text-muted'>Nenhum Card de Pokemon encontrado!</h2>
            </Col>
        </Row>
      </div>
    </main>
  )
}