import React, { useState, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import CardPokemon from '../components/CardPokemon';
import Paginacao from '../components/Paginacao';

interface PokemonCard {
    id: number;
    image: string;
    name:string;
    localId:string;
}

interface ListaCardsProps {
    lista: PokemonCard[];
    id?: string;
}

const ListaCardsPokemon: React.FC<ListaCardsProps> = ({ lista,id="listaCardsPokemon" }) => {
    const pageSize = 10;
    const [qtdPaginas, setQtdPaginas] = React.useState(0);
    const [paginaSelecionada, setPaginaSelecionada] = React.useState(1);
    const [listaPaginada, setListaPaginada] = React.useState<PokemonCard[][]>([]);
    const [listaPaginaSelecionada, setListaPaginaSelecionada] = React.useState<PokemonCard[]>();

    useEffect(() => {
        const novaListaPaginada = lista.reduce((acc: PokemonCard[][], item: PokemonCard, index: number) => {
          const pageIndex = Math.floor(index / pageSize);
    
          if (!acc[pageIndex]) {
            acc[pageIndex] = [];
          }
    
          acc[pageIndex].push(item);
          return acc;
        }, []);
    
        setQtdPaginas(novaListaPaginada.length-1);
        setListaPaginada(novaListaPaginada);
        setListaPaginaSelecionada(novaListaPaginada[paginaSelecionada - 1] || []);
    }, [lista, paginaSelecionada]);
    
    const selecionaPagina = (page: number) => {
    setPaginaSelecionada(page);
    };
    

    return (
        <div>
            <Row xs={1} sm={3} md={4} lg={4} xl={4} xxl={5} className="gx-2 gy-4" id={id}>
            {listaPaginaSelecionada?.map((card) => (
                <Col key={card.id}>
                <CardPokemon id={card.localId} img={card.image}/>
                </Col>
            ))}
            </Row>
            <Row className='mt-4 justify-content-center'>
                <Col sm md lg xl={3}>
                    <Paginacao qtdPaginas={qtdPaginas} paginaAtual={paginaSelecionada} funcaoListagem={selecionaPagina}/>
                </Col>
            </Row>
        </div>
    );

}

export default ListaCardsPokemon;