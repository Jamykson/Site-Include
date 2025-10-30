import React from 'react';
import '../css/CardProjeto.css'; // Importa o novo CSS específico do card

// 1. ▼▼▼ IMPORTAR O ÍCONE AQUI ▼▼▼
import { BsArrowRight } from "react-icons/bs"; 

function CardProjeto({ imagemUrl, imagemAlt, titulo, categoria, link }) {
  return (
    <article className="projeto-card"> 
      <div className="projeto-imagem"> 
        <img src={imagemUrl} alt={imagemAlt} />
      </div>
      <div className="projeto-info"> 
        <div>
          <h3>{titulo}</h3>
          <p>{categoria}</p>
        </div>
        
        <a 
          href={link} 
          className="projeto-link" 
          aria-label={`Ver mais sobre ${titulo}`}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {/* 2. ▼▼▼ ÍCONE SUBSTITUI A SETA AQUI ▼▼▼ */}
          <BsArrowRight />
        </a>
      </div>
    </article>
  );
}

export default CardProjeto;