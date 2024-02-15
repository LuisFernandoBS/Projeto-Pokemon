"use client"
import React, { useEffect , useState } from 'react';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';
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
  const [listaCardsRequisicao, setListaCardsRequisicao] = useState<PokemonCard[]>([]);

  const buscarListaCardPokemon  = async () => {
    requisicaoInicial -= 1;
    try {
      const resposta = await axios.get('https://api.tcgdex.net/v2/pt/cards');

      let listaCards = validarPaginarObjetos(resposta.data);    
      setListaCardsRequisicao(listaCards);
    } catch (erro:any) {
      console.error('Erro na requisição:', erro.message);
    }
  };

  useEffect(() => {    
    console.log(usuario);
    requisicaoInicial && buscarListaCardPokemon();
  }, []);

  const validarPaginarObjetos  = (lista: PokemonCard[][]) => {
    let listaObjetosValidos = lista.flat().filter((card: PokemonCard) => {
      return card.image && card.id;
    });
    return listaObjetosValidos;
  }

  return (
    <main className={classeMain}>
      <div>
        <Row>
          <Col className="text-center" sm md lg xl={12}><h3>Admin</h3></Col>
        </Row>
        <Row className='mt-4'>
            <Col sm md lg xl={12}>
              <ListaCards lista={listaCardsRequisicao} id='listaCardsPokemon' />
            </Col>
        </Row>
      </div>
    </main>
  )
}