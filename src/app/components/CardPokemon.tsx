import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface CardPokemonProps {
  img: string;
  id: string;
  visualizar?: boolean;
}

const CardPokemon: React.FC<CardPokemonProps> = ({
  img,
  id,
  visualizar = true,
}) => {
  let urlImagem = `${img}/low.png`;
  let btnVisualizar = (
    <Card.Body className="p-0">
      <Button className="w-100" size="lg" variant="primary">
        Visualizar
      </Button>
    </Card.Body>
  );

  return (
    <Card
      id={"card" + id}
      className="border rounded-5"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" src={urlImagem} />
      <div className="divImgCardEfect">
        <div className="divImgCard"></div>
      </div>
      {visualizar && btnVisualizar}
    </Card>
  );
};

export default CardPokemon;
