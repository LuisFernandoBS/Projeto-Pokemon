import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CardPokemonProps {
    img: string;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ img }) => {
  let urlImagem = `${img}/high.webp`
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={urlImagem} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Button variant="primary">Visualizar</Button>
          </Card.Body>
        </Card>
      );

}

export default CardPokemon;