import Pagination from 'react-bootstrap/Pagination';
import '../styles/components/paginacao.css'

interface PaginacaoProps {
    qtdPaginas: number;
    paginaAtual: number;
    funcaoListagem: Function;
}

const Paginacao: React.FC<PaginacaoProps> = ({ qtdPaginas,paginaAtual,funcaoListagem }) => {
    let items = [];
    let limitesNumMin = (paginaAtual - 2) >= 1 ? paginaAtual-2 :1;
    let limitesNumMax = (paginaAtual + 2) <= qtdPaginas? paginaAtual + 2 : (paginaAtual + 1) <= qtdPaginas? paginaAtual + 1 : paginaAtual;

    if (limitesNumMin == 1 || limitesNumMax == paginaAtual || qtdPaginas-1 == paginaAtual) {
        if(limitesNumMin == 1){
            let qtdCasas = paginaAtual == 1 ? 2 : 1;
            limitesNumMax = limitesNumMax != qtdPaginas ? (limitesNumMax + qtdCasas) <= qtdPaginas ? limitesNumMax + qtdCasas:limitesNumMax:qtdPaginas;
        }else{
            limitesNumMin = limitesNumMin != 1? (limitesNumMin - 2) >= 1 ? limitesNumMin - 2:limitesNumMin - 1 :1;
        }
    }
    

    for (let number = 1; number <= qtdPaginas; number++) {
        if (number >= limitesNumMin && number <= limitesNumMax) {
            items.push(
                <Pagination.Item key={number} active={paginaAtual == number} onClick={() => !(paginaAtual == number) && funcaoListagem(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        if (qtdPaginas > 6 && number == qtdPaginas && paginaAtual != qtdPaginas && number != limitesNumMax) {
            items.push(
                <Pagination.Ellipsis key={`ellipsis-${number}`} />
            );
        }
        if (number > 6 && number == qtdPaginas && paginaAtual != qtdPaginas && number != limitesNumMax) {
            items.push(
                <Pagination.Item key={number} active={paginaAtual == number} onClick={() => !(paginaAtual == number) && funcaoListagem(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
    }

    return(
        <div>
            <Pagination>
                <Pagination.First onClick={() => funcaoListagem(1)} />
                <Pagination.Prev onClick={() => (paginaAtual - 1) > 0 && funcaoListagem(paginaAtual - 1)}/>
                {items}
                <Pagination.Next onClick={() => (paginaAtual + 1) <= qtdPaginas && funcaoListagem(paginaAtual + 1)}/>
                <Pagination.Last onClick={() => funcaoListagem(qtdPaginas)}/>
            </Pagination>
        </div>
    );
}

export default Paginacao;