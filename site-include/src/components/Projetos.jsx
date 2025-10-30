import React from 'react';
import CardProjeto from './CardProjeto'; // Importa o novo componente de card
import '../css/Projetos.css'; // Sobe para src/, depois desce para css/

import imagemProjeto1 from '../assets/EficePrint.jpeg';
import imagemProjeto2 from '../assets/LugaresPrint.jpeg';
import imagemProjeto3 from '../assets/GameficPrint.png';

// Dados dos projetos
const projetosDados = [
  {
    id: 1,
    imagemUrl: imagemProjeto1,
    imagemAlt: 'Print do projeto Efice',
    titulo: 'Efice - Consultoria e Gestão',
    categoria: 'Landing Page',
    link: 'https://eficeconsultoria.com.br/',
  },
  {
    id: 2,
    imagemUrl: imagemProjeto2,
    imagemAlt: 'Print do projeto Lugares',
    titulo: 'Lugares de Charme',
    categoria: 'Landing Page',
    link: 'https://lugaresdecharme.com.br/',
  },
  {
    id: 3,
    imagemUrl: imagemProjeto3,
    imagemAlt: 'Print do projeto Gamefic',
    titulo: 'Gameficação',
    categoria: 'Landing Page',
    link: 'https://gamific-include.netlify.app/',
  },
];

function Projetos() { 
  return (
    <section className="projetos-section" id="projetos"> 
      <div className="container">
        
        {/* Cabeçalho da Seção */}
        <div className="projetos-header"> 
          <h2 className="section-title">Nossos trabalhos recentes</h2>
          
          {/* Estatísticas */}
          <div className="projetos-stats"> 
            <div className="stat-item">
              <strong>30+</strong>
              <span>Projetos de dev</span>
            </div>
          </div>
        </div>

        {/* Grade de Projetos */}
        <div className="projetos-grid"> 
          {/* Mapeia os dados dos projetos para criar um CardProjeto para cada um */}
          {projetosDados.map((projeto) => (
            <CardProjeto
              key={projeto.id}
              imagemUrl={projeto.imagemUrl}
              imagemAlt={projeto.imagemAlt}
              titulo={projeto.titulo}
              categoria={projeto.categoria}
              link={projeto.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;