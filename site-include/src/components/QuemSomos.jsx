import '../css/QuemSomos.css'
import React from 'react';

import FotoInclude from '../assets/foto-em-grupo-1.png'

export default  props => {
    return( 
        <section className='QuemSomos' id="quemSomos">
            <div className='box-img'>
                <img src={FotoInclude}/>
            </div>
            <div className='content'>
                <div className='titulo'>
                    <h2>Quem somos?</h2>
                </div>
                <div className="descricao">
                    <p>
                    A Include Engenharia é uma empresa júnior do Centro 
                    de Tecnologia da Universidade 
                    Federal do Rio Grande do Norte. Somos 
                    dedicados à promoção da vivência empresarial 
                    aos estudantes dos cursos de Ciências e 
                    Tecnologia, Engenharia da Computação, 
                    Engenharia Mecatrônica, Engenharia de
                    Telecomunicações e Tecnologia da Informação
                    </p>
                    <a href="https://www.instagram.com/engenhariainclude/"><button className='botao-quem-somos'> Saiba Mais </button></a>
                </div>
            </div>
        </section>
    );
}