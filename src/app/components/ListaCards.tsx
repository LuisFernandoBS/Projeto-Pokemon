import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import CardPokemon from '../components/CardPokemon';

interface PokemonCard {
    id: number;
    image: string;
    name:string;
    localId:string;
}

interface ListaCardsProps {
    lista: PokemonCard[];
    pagina: number;
}

const ListaCardsPokemon: React.FC<ListaCardsProps> = ({ lista, pagina = 0 }) => {
    const pageSize = 10;
    const [listaPaginaSelecionada, setListaPaginaSelecionada] = React.useState<PokemonCard[]>();
    
    function paginaLista<T>(array: T[], pageSize: number): T[][] {
        return array.reduce((acc: T[][], item: T, index: number) => {
          const pageIndex = Math.floor(index / pageSize);
      
          if (!acc[pageIndex]) {
            acc[pageIndex] = [];
          }
      
          acc[pageIndex].push(item);
          return acc;
        }, []);
    }

    function selecionaPagina(pagina: number) {
        const novaListaPaginada = paginaLista(lista, pageSize);
        setListaPaginaSelecionada(novaListaPaginada[pagina]);
    }
    
    React.useEffect(() => {
      selecionaPagina(pagina);
    }, [pagina, lista]);
    
    console.log(listaPaginaSelecionada);


    return (
        <Row xs={1} md={5} className="gx-2 gy-4">
          {listaPaginaSelecionada?.map((card) => (
            <Col key={card.id}>
              <CardPokemon id={card.localId} img={card.image}/>
            </Col>
          ))}
        </Row>
    );

}

export default ListaCardsPokemon;