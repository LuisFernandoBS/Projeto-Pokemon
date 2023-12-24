"use client"
import React, { useEffect , useState } from 'react';
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap';
import styles from '../styles/page.module.css'
import ListaCards from '../components/ListaCards'

interface PokemonCard {
  id: number;
  image: string;
  name:string;
  localId:string;
}

export default function Admin() {
  const classeMain = `p-1 ${styles.main}`;
  
  const [listaCardsRequisicao, setListaCardsRequisicao] = useState<PokemonCard[]>([]);

  const buscarListaCardPokemon  = async () => {
    try {
      const resposta = await axios.get('https://api.tcgdex.net/v2/pt/cards');

      let arrayCortado = resposta.data.slice(100);
      setListaCardsRequisicao(arrayCortado);
      console.log('O componente foi inicializado!');
    } catch (erro:any) {
      console.error('Erro na requisição:', erro.message);
    }
  };

  useEffect(() => {
    buscarListaCardPokemon();
  }, []);

  return (
    <main className={classeMain}>
      <Container>
        <Row>
          <Col className="text-center" sm md lg xl={12}><h3>Admin</h3></Col>
        </Row>
        <Row>
            <Col sm md lg xl={12}>
              <ListaCards lista={listaCardsRequisicao} />
            </Col>
        </Row>
      </Container>
        
    </main>
  )
}
