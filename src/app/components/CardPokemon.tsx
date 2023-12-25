import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CardPokemonProps {
    img: string;
    id: string;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ img,id }) => {
  let urlImagem = `${img}/low.png`
    return (
        <Card id={'card'+id} className='border rounded-5' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={urlImagem} />
          <div className='divImgCardEfect'>
            <div className='divImgCard'></div>
          </div>
          <Card.Body className='p-0'>
            <Button className='w-100' size='lg' variant="primary">Visualizar</Button>
          </Card.Body>
        </Card>
      );

}

export default CardPokemon;