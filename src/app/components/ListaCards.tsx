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
}

const ListaCardsPokemon: React.FC<ListaCardsProps> = ({ lista }) => {
    return (
        <Row xs={1} md={2} className="g-2">
          {lista.map((card) => (
            <Col key={card.id}>
              <CardPokemon img={card.image}/>
            </Col>
          ))}
        </Row>
    );

}

export default ListaCardsPokemon;