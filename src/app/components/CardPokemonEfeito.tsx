import React, { useEffect, useRef } from 'react';
import '../styles/components/cardEfeito.scss' 

interface CardPokemonEfeitoProps{
    id:string
    url:string
}

const CardPokemonEfeito: React.FC<CardPokemonEfeitoProps> = ({id,url}) => {
    const [imageUrl, setImageUrl] = React.useState("url(https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg)");
    const [efeito, setEfeito] = React.useState(false);
    const cardsRef = useRef<HTMLDivElement>(null);
    const styleRef = useRef<HTMLStyleElement>(null);
    let classCard = `card ${efeito?'efect':'no-efect'} lendary_1`

    useEffect(() => {
        setImageUrl(`url(${url}/low.png)!important`);
        const cards = cardsRef.current;
        const style = styleRef.current;
        
        if (!cards || !style) return;

        const bgImagem = `background-image:${imageUrl}`;
        cards.style.cssText = bgImagem;

        let x: NodeJS.Timeout;

        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
        // Normalizar eventos de mouse/toque
        const pos = [e instanceof TouchEvent ? e.touches[0].clientX : e.offsetX, e instanceof TouchEvent ? e.touches[0].clientY : e.offsetY];

        e.preventDefault();

        const card = e.target as HTMLDivElement;

        // Lógica para posição do mouse
        const l = pos[0];
        const t = pos[1];
        const h = card.clientHeight;
        const w = card.clientWidth;
        const px = Math.abs(Math.floor(100 / w * l) - 100);
        const py = Math.abs(Math.floor(100 / h * t) - 100);
        const pa = (50 - px) + (50 - py);

        // Lógica para posição do gradiente e fundo
        const lp = (50 + (px - 50) / 1.5);
        const tp = (50 + (py - 50) / 1.5);
        const px_spark = (50 + (px - 50) / 7);
        const py_spark = (50 + (py - 50) / 7);
        const p_opc = 20 + (Math.abs(pa) * 1.5);
        const ty = ((tp - 50) / 2) * -1;
        const tx = ((lp - 50) / 1.5) * 0.5;

        // CSS para aplicar ao cartão ativo
        const grad_pos = `background-position: ${lp}% ${tp}%;`;
        const sprk_pos = `background-position: ${px_spark}% ${py_spark}%; opacity: ${p_opc / 100};`;
        const opc = `opacity: ${p_opc / 100};`;
        const tf = `transform: rotateX(${ty}deg) rotateY(${tx}deg);
                    background-image:${imageUrl}`;

        // Definir/apply classe e estilo CSS
        cards.classList.remove('active');
        card.classList.remove('animated');
        card.style.cssText = tf;

        style.innerHTML = `
            .card:hover:before { ${grad_pos} }  /* gradiente */
            .card:hover:after { ${sprk_pos} ${opc} }   /* brilhos */ 
        `;

        if (e instanceof TouchEvent) {
            return false;
        }

        clearTimeout(x);
        };

        const handleMouseOut = () => {
        // Remover CSS, aplicar animação personalizada no final
        style.innerHTML = '';
        cards.removeAttribute('style');
        cards.setAttribute('style',`background-image:${imageUrl}`);

        x = setTimeout(() => {
            cards.classList.add('animated');
        }, 2500);
        };

        cards.addEventListener('mousemove', handleMouseMove);
        cards.addEventListener('touchmove', handleMouseMove);
        cards.addEventListener('mouseout', handleMouseOut);
        cards.addEventListener('touchend', handleMouseOut);
        cards.addEventListener('touchcancel', handleMouseOut);

        return () => {
        clearTimeout(x);
        cards.removeEventListener('mousemove', handleMouseMove);
        cards.removeEventListener('touchmove', handleMouseMove);
        cards.removeEventListener('mouseout', handleMouseOut);
        cards.removeEventListener('touchend', handleMouseOut);
        cards.removeEventListener('touchcancel', handleMouseOut);
        };
    }, [url,imageUrl]);

    return (
        <>
        <div role="button" ref={cardsRef} className={classCard} style={{ backgroundImage: "url(https://cdn2.bulbagarden.net/upload/1/17/Cardback.jpg)" }}></div>
        <style ref={styleRef}></style>
        </>
    );
};

export default CardPokemonEfeito;
