import React, { useState, useEffect } from 'react';
import {Row, Col} from 'react-bootstrap';
import CardPokemon from '../components/CardPokemonEfeito';
import DetalhesCard from '../components/DetalhesCard';
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
    const [show, setShow] = useState(false);
    const [urlImgem, setUrlImgem] = useState("");

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
    
    const abrirImagem = (url:string) => {
        setUrlImgem(`${url}/high.png`)
        setShow(true);
    }

    return (
        <div>
            <Row xs={1} sm={3} md={4} lg={4} xl={4} xxl={4} className="gx-2 gy-4" id={id}>
            {listaPaginaSelecionada?.map((card) => (
                <Col key={card.id} onClick={() => abrirImagem(card.image)}>
                <CardPokemon id={card.localId} url={card.image}/>
                </Col>
            ))}
            </Row>
            <Row className='mt-4 justify-content-center'>
                <Col sm md lg xl={3}>
                    <Paginacao qtdPaginas={qtdPaginas} paginaAtual={paginaSelecionada} funcaoListagem={selecionaPagina}/>
                </Col>
            </Row>
            <DetalhesCard url={urlImgem}  showModal={show} fecharModal={setShow}/>
        </div>
    );

}

export default ListaCardsPokemon;